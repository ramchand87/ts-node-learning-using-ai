import { Calculator } from './Calculator';

describe('Calculator Spies', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
        // Clear all mocks/spies before each test
        jest.clearAllMocks();
    });

    test('should spy on console.log', () => {
        // 1. Spy on console.log
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        // .mockImplementation(() => {}) prevents it from actually printing to the console during test

        // 2. Call the method that logs
        calculator.addWithLogging(2, 3);

        // 3. Verify it was called
        expect(logSpy).toHaveBeenCalledWith('Adding 2 + 3');

        // 4. Restore original implementation (Important!)
        logSpy.mockRestore();
    });

    test('should spy on internal "add" method', () => {
        // 1. Spy on the 'add' method of the calculator instance
        const addSpy = jest.spyOn(calculator, 'add');

        // 2. Call the wrapper method
        const result = calculator.addWithLogging(10, 5);

        // 3. Verify 'add' was called internally
        expect(addSpy).toHaveBeenCalledWith(10, 5);
        expect(result).toBe(15);
    });

    test('should mock return value of spied method', () => {
        // 1. Spy and change behavior (Partial Mocking)
        const addSpy = jest.spyOn(calculator, 'add').mockReturnValue(999);

        // 2. Call the wrapper method
        const result = calculator.addWithLogging(10, 5);

        // 3. Verify
        expect(addSpy).toHaveBeenCalledWith(10, 5);
        expect(result).toBe(999); // It returned our mocked value!
    });
});
