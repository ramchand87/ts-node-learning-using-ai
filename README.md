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
*   `src/unittest_demo`: Unit testing with Jest.
*   `src/file_handling_demo`: File System and Streams (fs).
*   `src/log_handling_demo`: Structured logging with Winston.
*   `src/debug_demo`: Debugging and Profiling tools.
*   `src/nestjs_basics`: NestJS fundamentals (Modules, Controllers, Guards, Interceptors).
*   `src/nestjs_http_demo`: Making external REST calls with HttpModule.
*   `src/nestjs_config_demo`: Managing configurations with ConfigModule and .env.
*   `src/nestjs_validation_demo`: Validating input using DTOs, pipes, and class-validator.
*   `src/nestjs_exception_demo`: Global error handling using Exception Filters.

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

### Step 6: File Handling & Streams
Learn how to work with the file system (`fs`) and handle large files efficiently using Streams.

*   **Documentation**: [README](src/file_handling_demo/README.md)
*   **Key Files**:
    *   [`src/file_handling_demo/FileOps.ts`](src/file_handling_demo/FileOps.ts)
    *   [`src/file_handling_demo/StreamOps.ts`](src/file_handling_demo/StreamOps.ts)
*   **How to Run**:
    ```bash
    npx ts-node src/file_handling_demo/FileOps.ts
    npx ts-node src/file_handling_demo/StreamOps.ts
    ```

### Step 7: Log Handling (Winston)
Implement structured logging with levels, timestamps, and file rotation using Winston.

*   **Documentation**: [README](src/log_handling_demo/README.md)
*   **Key Files**:
    *   [`src/log_handling_demo/Logger.ts`](src/log_handling_demo/Logger.ts)
    *   [`src/log_handling_demo/Usage.ts`](src/log_handling_demo/Usage.ts)
*   **How to Run**:
    ```bash
    npx ts-node src/log_handling_demo/Usage.ts
    ```

### Step 8: Debugging & Profiling
Learn how to debug Node.js apps in VS Code and profile memory leaks using Chrome DevTools.

*   **Documentation**: [README](src/debug_demo/README.md)
*   **Key Files**:
    *   [`src/debug_demo/MemoryLeak.ts`](src/debug_demo/MemoryLeak.ts)
    *   [`.vscode/launch.json`](.vscode/launch.json)
*   **How to Run**:
    *   **Debug**: Open `src/debug_demo/MemoryLeak.ts` and press **F5**.
    *   **Profile**:
        ```bash
        node --inspect -r ts-node/register src/debug_demo/MemoryLeak.ts
        ```

### Step 9: NestJS Fundamentals
Learn the basics of NestJS: Modules, Controllers, Providers, and Dependency Injection.

*   **Documentation**: [README](src/nestjs_basics/README.md)
*   **Key Files**:
    *   [`src/nestjs_basics/main.ts`](src/nestjs_basics/main.ts)
    *   [`src/nestjs_basics/app.module.ts`](src/nestjs_basics/app.module.ts)
    *   [`src/nestjs_basics/product.controller.ts`](src/nestjs_basics/product.controller.ts)
    *   [`src/nestjs_basics/auth.guard.ts`](src/nestjs_basics/auth.guard.ts)
    *   [`src/nestjs_basics/logging.interceptor.ts`](src/nestjs_basics/logging.interceptor.ts)
    *   [`src/nestjs_basics/transform.interceptor.ts`](src/nestjs_basics/transform.interceptor.ts)
*   **How to Run**:
    ```bash
    npm run start:nest
    ```


### Step 10: Making External REST Calls
Learn how to use NestJS `HttpModule` to fetch data from external APIs using RxJS Observables.

*   **Documentation**: [README](src/nestjs_http_demo/README.md)
*   **Key Files**:
    *   [`src/nestjs_http_demo/users.service.ts`](src/nestjs_http_demo/users.service.ts)
    *   [`src/nestjs_http_demo/users.controller.ts`](src/nestjs_http_demo/users.controller.ts)
*   **How to Run**:
    ```bash
    npm run start:http
    ```

### Step 11: Environment Configuration
Learn how to use `.env` files and `@nestjs/config` for 12-factor app configuration.

*   **Documentation**: [README](src/nestjs_config_demo/README.md)
*   **Key Files**:
    *   [`src/nestjs_config_demo/.env`](src/nestjs_config_demo/.env)
    *   [`src/nestjs_config_demo/app.module.ts`](src/nestjs_config_demo/app.module.ts)
*   **How to Run**:
    ```bash
    npm run start:config
    ```

### Step 12: Input Validation
Learn how to ensure data integrity using `class-validator` and Pipe transformations.

*   **Documentation**: [README](src/nestjs_validation_demo/README.md)
*   **Key Files**:
    *   [`src/nestjs_validation_demo/dto/create-user.dto.ts`](src/nestjs_validation_demo/dto/create-user.dto.ts)
    *   [`src/nestjs_validation_demo/main.ts`](src/nestjs_validation_demo/main.ts)
*   **How to Run**:
    ```bash
    npm run start:validation
    ```

### Step 13: Global Error Handling
Standardize error responses across the application using **Exception Filters**.

*   **Documentation**: [README](src/nestjs_exception_demo/README.md)
*   **Key Files**:
    *   [`src/nestjs_exception_demo/http-exception.filter.ts`](src/nestjs_exception_demo/http-exception.filter.ts)
    *   [`src/nestjs_exception_demo/main.ts`](src/nestjs_exception_demo/main.ts)
*   **How to Run**:
    ```bash
    npm run start:exception
    ```

### Step 14: React UI Setup & Routing
Initialize a React application with Vite, Tailwind CSS, and client-side routing. Learn how to create pages, handle events, and write unit tests.

*   **Documentation**: [README](react-ui/README.md)
*   **Key Files**:
    *   [`react-ui/src/App.tsx`](react-ui/src/App.tsx)
    *   [`react-ui/src/pages/Playground.tsx`](react-ui/src/pages/Playground.tsx)
    *   [`react-ui/src/pages/Playground.test.tsx`](react-ui/src/pages/Playground.test.tsx)
*   **How to Run**:
    ```bash
    cd react-ui
    npm run dev
    # Run tests
    npm test
    ```
