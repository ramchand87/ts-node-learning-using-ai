# Unit Testing with Jest

This tutorial demonstrates how to write unit tests in Node.js using **Jest**, the industry-standard testing framework.

> [!TIP]
> **Coming from Java?** Check out our **[Java vs Node.js Unit Testing Guide](./JAVA_COMPARISON.md)**.

## What is Covered?

1.  **Basic Testing**: Writing test suites (`describe`) and test cases (`test` or `it`).
2.  **Async Testing**: Testing Promises and `async/await` functions.
3.  **Callback Testing**: Testing legacy callback-style functions using `done` or Promisification.
4.  **Mocking (Mockito Style)**: Mocking entire class dependencies to test services in isolation.
5.  **Spies**: Spying on methods (like `console.log`) or doing partial mocking of real objects.
6.  **Parameterized Tests**: Running the same test logic with multiple inputs (Data-Driven Testing).

## Jest Configuration (`jest.config.js`)

The configuration file controls how Jest runs. Here is the significance of the settings used:

*   **`preset: 'ts-jest'`**:
    *   Tells Jest to use `ts-jest` to handle TypeScript files.
    *   Without this, Jest (which only understands JavaScript) would fail to run `.ts` files.
    *   It handles the compilation of TypeScript in memory during testing.

*   **`testEnvironment: 'node'`**:
    *   Sets the testing environment to Node.js.
    *   The alternative is `jsdom` (used for React/Frontend), which simulates a browser window.
    *   Since we are writing backend code, `node` is the correct choice to access APIs like `fs` or `path`.

*   **`verbose: true`**:
    *   Forces Jest to print the name of every individual test case in the console.
    *   Useful for seeing exactly which steps passed or failed.

## Key Files

### 1. Basic & Advanced Logic (`Calculator`)
*   **Source**: [`Calculator.ts`](Calculator.ts)
*   **Tests**: [`Calculator.spec.ts`](Calculator.spec.ts)
*   **Concepts**: Sync tests, Async tests, Callbacks, Parameterized Tests (`test.each`).

### 2. Mocking Dependencies (`UserService`)
*   **Source**: [`UserService.ts`](UserService.ts) (depends on `Database.ts`)
*   **Tests**: [`UserService.spec.ts`](UserService.spec.ts)
*   **Concepts**:
    *   `jest.mock('./Database')` -> Like `@Mock`
    *   `mockImplementation` -> Like `when(...).thenAnswer(...)`
    *   `expect(...).toHaveBeenCalled` -> Like `verify(...)`

### 3. Spies & Partial Mocking
*   **Tests**: [`Spy.spec.ts`](Spy.spec.ts)
*   **Concepts**: `jest.spyOn` to track calls to `console.log` or internal methods without replacing the whole class.

## How to Run

Run all tests:
```bash
npm test
```
