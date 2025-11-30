import * as fs from 'fs';
import * as readline from 'readline';
import { main } from './StreamOps';
import { EventEmitter } from 'events';

jest.mock('fs');
jest.mock('readline');

describe('StreamOps', () => {
    const mockExistsSync = fs.existsSync as jest.Mock;
    const mockMkdirSync = fs.mkdirSync as jest.Mock;
    const mockCreateReadStream = fs.createReadStream as jest.Mock;
    const mockCreateWriteStream = fs.createWriteStream as jest.Mock;
    const mockCreateInterface = readline.createInterface as jest.Mock;

    beforeEach(() => {
        jest.clearAllMocks();
        mockExistsSync.mockReturnValue(false);
    });

    it('should generate dummy file if it does not exist', async () => {
        mockExistsSync.mockReturnValue(false);

        const mockWriteStream = {
            write: jest.fn(),
            end: jest.fn(),
            on: jest.fn().mockImplementation((event, callback) => {
                if (event === 'finish') callback();
            })
        };
        mockCreateWriteStream.mockReturnValue(mockWriteStream);

        // Mock readline to return empty iterator to avoid blocking
        mockCreateInterface.mockReturnValue({
            [Symbol.asyncIterator]: async function* () { yield 'line'; }
        });
        mockCreateReadStream.mockReturnValue({});

        await main();

        expect(mockCreateWriteStream).toHaveBeenCalledWith(expect.stringContaining('large_input.txt'));
        expect(mockWriteStream.write).toHaveBeenCalled();
        expect(mockWriteStream.end).toHaveBeenCalled();
    });

    it('should process lines and filter errors', async () => {
        // Assume file exists so we skip generation
        mockExistsSync.mockReturnValue(true);

        const mockReadStream = {};
        mockCreateReadStream.mockReturnValue(mockReadStream);

        const mockWriteStream = {
            write: jest.fn()
        };
        mockCreateWriteStream.mockReturnValue(mockWriteStream);

        // Mock readline async iterator
        const lines = [
            'Line 1: Level=INFO',
            'Line 2: Level=ERROR',
            'Line 3: Level=INFO'
        ];

        mockCreateInterface.mockReturnValue({
            [Symbol.asyncIterator]: async function* () {
                for (const line of lines) {
                    yield line;
                }
            }
        });

        await main();

        expect(mockCreateInterface).toHaveBeenCalledWith({ input: mockReadStream });
        expect(mockWriteStream.write).toHaveBeenCalledTimes(1);
        expect(mockWriteStream.write).toHaveBeenCalledWith('Line 2: Level=ERROR\n');
    });
});
