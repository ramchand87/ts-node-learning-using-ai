import { HttpExceptionFilter } from './http-exception.filter';
import { ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

describe('HttpExceptionFilter', () => {
    let filter: HttpExceptionFilter;

    beforeEach(() => {
        filter = new HttpExceptionFilter();
    });

    it('should be defined', () => {
        expect(filter).toBeDefined();
    });

    it('should format the exception response', () => {
        const mockJson = jest.fn();
        const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
        const mockGetResponse = jest.fn().mockReturnValue({ status: mockStatus });
        const mockGetRequest = jest.fn().mockReturnValue({ url: '/test-url' });
        const mockHttpArgumentsHost = jest.fn().mockReturnValue({
            getResponse: mockGetResponse,
            getRequest: mockGetRequest,
        });
        const mockArgumentsHost = {
            switchToHttp: mockHttpArgumentsHost,
        } as unknown as ArgumentsHost;

        const exception = new HttpException('Test error', HttpStatus.FORBIDDEN);

        filter.catch(exception, mockArgumentsHost);

        expect(mockStatus).toHaveBeenCalledWith(403);
        expect(mockJson).toHaveBeenCalledWith(
            expect.objectContaining({
                statusCode: 403,
                path: '/test-url',
                message: 'Test error',
            }),
        );
    });
});
