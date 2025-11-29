import { Calculator } from './Calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    // "beforeEach" runs before every single test case (like @BeforeEach in JUnit)
    beforeEach(() => {
        calculator = new Calculator();
    });

    // 1. Basic Sync Test
    test('should add two numbers correctly', () => {
        const result = calculator.add(2, 3);
        expect(result).toBe(5); // "expect" is like "Assert" in JUnit
    });

    // 2. Async Test (using async/await)
    test('should multiply two numbers asynchronously', async () => {
        const result = await calculator.multiplyAsync(3, 4);
        expect(result).toBe(12);
    });

    // 3. Callback Test (using 'done')
    test('should divide two numbers using a callback', (done) => {
        calculator.divideWithCallback(10, 2, (error, result) => {
            expect(error).toBeNull();
            expect(result).toBe(5);
            done(); // Call 'done' to tell Jest the callback finished
        });
    });

    // 4. Testing Errors in Callbacks
    test('should return error when dividing by zero', (done) => {
        calculator.divideWithCallback(10, 0, (error, result) => {
            expect(error).toBeDefined();
            expect(error?.message).toBe("Cannot divide by zero");
            done();
        });
    });

    // 5. Testing Callback by Promisifying (Cleaner, Modern Way)
    test('should divide using callback (promisified wrapper)', async () => {
        const result = await new Promise<number>((resolve, reject) => {
            calculator.divideWithCallback(10, 2, (err, res) => {
                if (err) reject(err);
                else resolve(res!);
            });
        });

        expect(result).toBe(5);
    });

    // 6. Parameterized Tests (Data Driven Testing)
    // JUnit: @ParameterizedTest + @CsvSource
    test.each([
        [1, 2, 3],
        [5, 5, 10],
        [10, -2, 8],
        [0, 0, 0]
    ])('add(%i, %i) should return %i', (a, b, expected) => {
        expect(calculator.add(a, b)).toBe(expected);
    });
});
