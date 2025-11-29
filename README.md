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

## Project Structure

The project is organized into `src` containing various learning modules:

*   `src/node_class_demo`: Basic Node.js class & module demo (CommonJS).
*   `src/ts_class_demo`: Basic TypeScript class & module demo.
*   `src/async_await_demo`: Asynchronous programming examples.
*   `src/event_demo`: Node.js Event Emitter patterns.

## Step-by-Step Learning Guide

Follow these modules to understand the progression of concepts in this workspace.

### Step 1: Node.js Basics (Classes & Modules)
Understand how classes and modules work in both standard Node.js (CommonJS) and TypeScript.

*   **Key Files**:
    *   [`src/node_class_demo/Person.js`](src/node_class_demo/Person.js): A simple class definition using `module.exports`.
    *   [`src/node_class_demo/index.js`](src/node_class_demo/index.js): Importing and using the class.
    *   [`src/ts_class_demo/Person.ts`](src/ts_class_demo/Person.ts): A strongly-typed class definition.
    *   [`src/ts_class_demo/index.ts`](src/ts_class_demo/index.ts): Using the class with type checking.

*   **How to Run**:
    ```bash
    # Run Node.js demo
    node src/node_class_demo/index.js

    # Run TypeScript demo
    npx ts-node src/ts_class_demo/index.ts
    ```

### Step 2: Async/Await & Promises
Learn how to handle asynchronous operations, promises, and the async/await syntax.

*   **Key Files**:
    *   [`src/async_await_demo/index.ts`](src/async_await_demo/index.ts): Comprehensive demo of async functions, promise chaining, and error handling.
*   **How to Run**:
    ```bash
    npx ts-node src/async_await_demo/index.ts
    ```

### Step 3: Event Emitters
Explore the Node.js `events` module to build event-driven architectures.

*   **Key Files**:
    *   [`src/event_demo/TicketManager.ts`](src/event_demo/TicketManager.ts): A class extending `EventEmitter`.
    *   [`src/event_demo/index.ts`](src/event_demo/index.ts): Listening to and emitting events.
*   **How to Run**:
    ```bash
    npx ts-node src/event_demo/index.ts
    ```

## Future Learning Goals

*   Understand Node.js runtime and event loop.
*   Master TypeScript syntax, types, and interfaces.
*   Learn NestJS framework fundamentals (Modules, Controllers, Providers).
*   Experiment with AI-assisted coding workflows.
