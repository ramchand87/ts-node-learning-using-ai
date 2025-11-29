# Project Learnings

This document tracks key concepts and technical learnings from the "AI Workspace" project.

## Async/Await & Promises
**Date:** 2025-11-29

### Core Concepts
*   **Asynchronous Programming**: Allows Node.js to handle tasks like file I/O or API calls without blocking the main execution thread.
*   **Promises**: Objects representing the eventual completion (or failure) of an asynchronous operation.
*   **Async/Await**: Modern syntax that makes asynchronous code look and behave like synchronous code, making it easier to read and debug.

### TypeScript Types in Promises
*   **`Promise<void>`**:
    *   Indicates that the asynchronous operation will complete, but it **will not return any value**.
    *   Example: `simulateDelay` just waits; it doesn't give back data.
*   **`Promise<{ id: number; name: string }>`**:
    *   Indicates that when the Promise resolves, it will deliver an object with an `id` (number) and `name` (string).
    *   This provides **type safety**: TypeScript knows exactly what data to expect after `await`.

### Code Breakdown (`src/async_await_demo/index.ts`)

1.  **`simulateDelay(ms)`**:
    *   A helper function that returns a `Promise`. It uses `setTimeout` to mimic a slow operation (like a database query).

2.  **`fetchUserData(id)`**:
    *   Marked with `async`, meaning it automatically returns a Promise.
    *   Uses `await simulateDelay(...)` to pause execution *within the function* until the delay is over, without blocking the rest of the program.

3.  **`main()` Function**:
    *   **Purpose**: Serves as the entry point for the script.
    *   **Why it's needed**: In standard Node.js (CommonJS), you cannot use `await` at the top level of a file. Wrapping code in an `async function main() {...}` creates a scope where `await` is allowed.
    *   **Error Handling**: Allows wrapping the entire logic in a `try/catch` block to handle any errors from the awaited promises.

4.  **`main();` (Last Line)**:
    *   **Significance**: This is the **execution trigger**.
    *   Defining the function `main` doesn't run it. This line explicitly calls the function to start the program. Without it, the script would do nothing.

### Execution Patterns
*   **Sequential**: `await func1(); await func2();` - Runs one after the other. Good when the second depends on the first.
*   **Parallel**: `await Promise.all([func1(), func2()]);` - Runs both simultaneously. Much faster for independent tasks.
