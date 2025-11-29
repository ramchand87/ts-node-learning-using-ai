# Async/Await & Parallel Execution Demo

This tutorial explores advanced usage of `async/await`, specifically focusing on the difference between sequential and parallel execution, as well as asynchronous file I/O.

## What is Covered?

1.  **Sequential Execution**: Waiting for one async task to finish before starting the next (using `await` line-by-line).
2.  **Parallel Execution**: Running multiple async tasks simultaneously using `Promise.all()` to improve performance.
3.  **File I/O**: Using the `fs/promises` API to read and write files asynchronously without blocking the event loop.
4.  **Error Handling**: Using `try/catch` blocks to gracefully handle errors in async functions.

## Key Files

*   `index.ts`: The main script demonstrating sequential vs. parallel fetching and file operations.

## How to Run

```bash
npm run start:async
```
