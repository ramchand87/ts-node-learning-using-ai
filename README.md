# AI Workspace - Node.js, TypeScript & NestJS Learning

This repository serves as a learning playground for mastering Node.js, TypeScript, and NestJS. It contains various demos, experiments, and small projects to explore different concepts and features of these technologies.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

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

## Usage

To compile the TypeScript code and run the main application:

```bash
npm start
```

This command uses `tsc` to build the project and `node` to execute the output in `dist/index.js`.

To run the **Async/Await Demo**:
```bash
npm run start:async
```

### Exploring Demos

The workspace is organized into different sections:

*   **`src/`**: Main source code for the workspace.
    *   **`src/async_await_demo/`**: Examples of Asynchronous programming using Promises and Async/Await.
*   **`ts_class_demo/`**: Demonstrations specifically focused on TypeScript classes and object-oriented programming concepts.
*   **`node_class_demo/`**: Examples of Node.js specific class implementations and module patterns.

## Project Structure

```text
AI_Workspace/
├── dist/               # Compiled JavaScript files
├── node_class_demo/    # Node.js class examples
├── src/                # Main application source
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
