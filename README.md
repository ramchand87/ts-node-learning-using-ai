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
*   `src/promise_demo`: Fundamental Promise concepts.
*   `src/async_await_demo`: Advanced Async/Await & Parallel execution.
*   `src/event_demo`: Node.js Event Emitter patterns.

## Step-by-Step Learning Guide

Follow these modules to understand the progression of concepts in this workspace.

### Step 1: Node.js Basics (Classes & Modules)
Understand how classes and modules work in both standard Node.js (CommonJS) and TypeScript.

*   **Documentation**: [README](src/node_class_demo/README.md) | [Diagram](src/node_class_demo/diagram.puml)
*   **Key Files**:
    *   [`src/node_class_demo/Person.js`](src/node_class_demo/Person.js)
    *   [`src/ts_class_demo/Person.ts`](src/ts_class_demo/Person.ts)
*   **How to Run**:
    ```bash
    node src/node_class_demo/index.js
    npx ts-node src/ts_class_demo/index.ts
    ```

### Step 2: Promises (The Foundation)
Learn the core concept of Promises, how to create them, and how to consume them using `.then()` vs `async/await`.

*   **Documentation**: [README](src/promise_demo/README.md) | [Diagram](src/promise_demo/diagram.puml)
*   **Key Files**:
    *   [`src/promise_demo/index.ts`](src/promise_demo/index.ts)
*   **How to Run**:
    ```bash
    npm run start:promise
    ```

### Step 3: Async/Await & Parallel Execution
Deep dive into sequential vs. parallel execution and file I/O using `fs/promises`.

*   **Documentation**: [README](src/async_await_demo/README.md) | [Diagram](src/async_await_demo/diagram.puml)
*   **Key Files**:
    *   [`src/async_await_demo/index.ts`](src/async_await_demo/index.ts)
*   **How to Run**:
    ```bash
    npm run start:async
    ```

### Step 4: Event Emitters
Explore the Node.js `events` module to build event-driven architectures.

*   **Documentation**: [README](src/event_demo/README.md) | [Diagram](src/event_demo/design.puml)
*   **Key Files**:
    *   [`src/event_demo/TicketManager.ts`](src/event_demo/TicketManager.ts)
*   **How to Run**:
    ```bash
    npm run start:events
    ```

### Step 5: Unit Testing (Jest)
Learn how to write unit tests using Jest, covering mocks, spies, and async testing.

*   **Documentation**: [README](src/unittest_demo/README.md)
*   **Key Files**:
    *   [`src/unittest_demo/Calculator.spec.ts`](src/unittest_demo/Calculator.spec.ts)
    *   [`src/unittest_demo/UserService.spec.ts`](src/unittest_demo/UserService.spec.ts)
*   **How to Run**:
    ```bash
    npm test
    ```

## Future Learning Goals

*   Understand Node.js runtime and event loop.
*   Master TypeScript syntax, types, and interfaces.
*   Learn NestJS framework fundamentals (Modules, Controllers, Providers).
*   Experiment with AI-assisted coding workflows.
