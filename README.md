# AI Workspace - Node.js, TypeScript & NestJS Learning

This repository serves as a learning playground for mastering Node.js, TypeScript, and NestJS. It contains various demos, experiments, and small projects to explore different concepts and features of these technologies.

## Prerequisites

*   [Node.js](https://nodejs.org/) (v14 or higher recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/ramchand87/ts-node-learning-using-ai.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd ts-node-learning-using-ai
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

## Step-by-Step Learning Guide

Follow these modules to understand the progression of concepts in this workspace.

### Step 1: Node.js Basics (Classes & Modules)
Understand how classes and modules work in standard Node.js (CommonJS).

*   **Key Files**:
    *   [`node_class_demo/Person.js`](node_class_demo/Person.js): A simple class definition using `module.exports`.
    *   [`node_class_demo/index.js`](node_class_demo/index.js): Importing and using the class.
*   **How to Run**:
    ```bash
    node node_class_demo/index.js
    ```

### Step 2: TypeScript Fundamentals
Learn how to use TypeScript for type safety and modern class syntax.

*   **Key Files**:
    *   [`ts_class_demo/Person.ts`](ts_class_demo/Person.ts): A strongly-typed class.
    *   [`ts_class_demo/index.ts`](ts_class_demo/index.ts): Using the class with type checking.
*   **How to Run**:
    ```bash
    # Requires compiling first, or running with ts-node (if installed)
    tsc && node ts_class_demo/dist/index.js
    ```

### Step 3: Async/Await & Promises
Master asynchronous programming to handle operations like file I/O and API calls efficiently.

*   **Key Files**:
    *   [`src/async_await_demo/index.ts`](src/async_await_demo/index.ts): Demonstrates `Promise`, `async/await`, sequential vs parallel execution, and file I/O.
    *   [`learnings.md`](learnings.md): Detailed notes on concepts like `Promise<void>` and the `main()` function.
*   **How to Run**:
    ```bash
    npm run start:async
    ```

### Step 4: Main Application Structure
See how a TypeScript project is structured with a `src` folder and build process.

*   **Key Files**:
    *   [`src/index.ts`](src/index.ts): The entry point for the main application.
    *   [`tsconfig.json`](tsconfig.json): Configuration for the TypeScript compiler.
*   **How to Run**:
    ```bash
    npm start
    ```

## Project Structure

```text
AI_Workspace/
├── dist/               # Compiled JavaScript files
├── node_class_demo/    # Node.js class examples
├── src/                # Main application source
│   └── async_await_demo/ # Async/Await examples
├── ts_class_demo/      # TypeScript class examples
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── learnings.md        # Detailed notes on concepts learned
└── README.md           # Project documentation
```

## Learning Goals

*   Understand Node.js runtime and event loop.
*   Master TypeScript syntax, types, and interfaces.
*   Learn NestJS framework fundamentals (Modules, Controllers, Providers).
*   Experiment with AI-assisted coding workflows.
