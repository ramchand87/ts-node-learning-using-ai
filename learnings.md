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
*   **Parallel**: `await Promise.all([func1(), func2()]);` - Runs both simultaneously. Much faster for independent tasks.

## NestJS Fundamentals (Phases 2-3)
**Date:** 2025-12-05

### Core Concepts
*   **Modules**: The building blocks of NestJS (e.g., `HttpModule`, `ConfigModule`).
*   **Global Filters**: We created an `HttpExceptionFilter` to catch and format errors globally.
*   **DTOs & Validation**: Used `class-validator` to ensure incoming data is correct.

## React & Frontend Architecture (Phase 4)
**Date:** 2025-12-06 - 2025-12-07

### 1. Project Setup
*   **Vite**: The build tool. Fast and modern.
*   **Tailwind CSS**: Utility-first CSS framework for rapid styling.

### 2. Redux Toolkit (State Management)
*   **Store**: The single source of truth for global state.
*   **Slices**: A way to bundle Reducer logic and Actions together (e.g., `playgroundSlice`).
*   **Hooks**: `useAppDispatch` and `useAppSelector` for type-safe interaction.
*   **Benefit**: Decouples State from UI. State survives even if components unmount.

### 3. Client-Side Persistence (IndexedDB)
*   **Problem**: Redux state is lost on page reload.
*   **Solution**: **IndexedDB** (Browser's built-in NoSQL database).
*   **`idb` Library**: Wrapped the crude Event-based API into nice **Promises**.
*   **Wiring**:
    *   **Hydration**: App loads data from DB on startup -> Updates Redux.
    *   **Subscription**: App watches Redux changes -> Saves to DB.

### 4. Micro-Frontends (Module Federation)
*   **Concept**: Splitting a monolithic app into smaller, independent apps.
*   **Host vs Remote**:
    *   **Host**: The main app that loads other components (`react-ui`).
    *   **Remote**: The provider app that exposes components (`remote-app`).
*   **Module Federation**: Allows sharing code (like React) at runtime.
*   **Gotchas**:
    *   **Singletons**: Critical libraries like `react` MUST be shared as singletons.
    *   **Version Mismatch**: Host and Remote must use compatible versions (e.g., both React 18).
