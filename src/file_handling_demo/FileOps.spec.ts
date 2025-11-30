import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';
import { main } from './FileOps';

jest.mock('fs');
jest.mock('fs/promises');

describe('FileOps', () => {
    const mockExistsSync = fs.existsSync as jest.Mock;
    const mockMkdirSync = fs.mkdirSync as jest.Mock;
    const mockWriteFileSync = fs.writeFileSync as jest.Mock;
    const mockReadFileSync = fs.readFileSync as jest.Mock;
    const mockAppendFile = fsPromises.appendFile as jest.Mock;
    const mockReadFile = fsPromises.readFile as jest.Mock;

    beforeEach(() => {
        jest.clearAllMocks();
        // Default mocks
        mockExistsSync.mockReturnValue(false);
        mockReadFileSync.mockReturnValue('Sync Content');
        mockReadFile.mockResolvedValue('Async Content');
    });

    it('should create directory if it does not exist', async () => {
        mockExistsSync.mockReturnValue(false);
        await main();
        expect(mockMkdirSync).toHaveBeenCalled();
    });

    it('should not create directory if it exists', async () => {
        mockExistsSync.mockReturnValue(true);
        await main();
        expect(mockMkdirSync).not.toHaveBeenCalled();
    });

    it('should perform synchronous write and read', async () => {
        await main();
        expect(mockWriteFileSync).toHaveBeenCalledWith(expect.stringContaining('example.txt'), expect.stringContaining('Synchronous Write'));
        expect(mockReadFileSync).toHaveBeenCalledWith(expect.stringContaining('example.txt'), 'utf-8');
    });

    it('should perform asynchronous append and read', async () => {
        await main();
        expect(mockAppendFile).toHaveBeenCalledWith(expect.stringContaining('example.txt'), expect.stringContaining('Asynchronous Append'));
        expect(mockReadFile).toHaveBeenCalledWith(expect.stringContaining('example.txt'), 'utf-8');
    });
});
