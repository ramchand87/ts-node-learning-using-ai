# Debugging & Profiling in Node.js

This module demonstrates how to debug Node.js applications and profile memory usage.

## 1. Debugging with VS Code

We have configured `.vscode/launch.json` to allow debugging TypeScript files directly.

### How to Debug
1.  Open `src/debug_demo/MemoryLeak.ts` (or any other `.ts` file).
2.  Set a breakpoint by clicking to the left of a line number (red dot).
3.  Press **F5** or go to **Run -> Start Debugging**.
4.  Select **"Debug Current File (ts-node)"** if prompted.
5.  The execution will pause at your breakpoint. You can inspect variables, step over/into functions, and watch expressions.

## 2. Profiling Memory Leaks

Memory leaks occur when objects are retained in memory longer than necessary, eventually crashing the application.

### How to Profile
1.  Run the memory leak demo with the inspector enabled:
    ```bash
    node --inspect -r ts-node/register src/debug_demo/MemoryLeak.ts
    ```
    *   `--inspect`: Enables the Node.js inspector agent.
    *   `-r ts-node/register`: Allows running TypeScript directly.

2.  Open **Google Chrome** (or Edge).
3.  Navigate to `chrome://inspect`.
4.  Click **"Open dedicated DevTools for Node"** or look for your script under "Remote Target" and click **inspect**.
5.  Go to the **Memory** tab.
6.  Take a **Heap Snapshot**.
7.  Wait a few seconds (let the script leak more memory).
8.  Take another **Heap Snapshot**.
9.  Compare the snapshots to see which objects are accumulating (look for large strings or arrays).

## Files
- **MemoryLeak.ts**: A script that intentionally leaks memory to demonstrate profiling.
