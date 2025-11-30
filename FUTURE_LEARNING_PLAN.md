# Node.js Future Learning Plan

This document outlines the roadmap for upcoming learning sessions. We will tackle these topics one by one.

## Phase 1: Core Node.js & Tooling


### 2. Log Handling (The "SLF4J" of Node)
*   **Concepts**: Structured logging using **Winston** or **Pino**.
*   **Java Equivalent**: SLF4J + Logback/Log4j.
*   **Goal**: Replace `console.log` with a logger that supports levels (INFO, ERROR), timestamps, and file rotation.

### 3. Debugging & Profiling
*   **Concepts**:
    *   **Debugging**: Configuring VS Code (`launch.json`) to attach to the Node process.
    *   **Profiling**: Using `node --inspect`, Chrome DevTools, and libraries like `heapdump` to analyze memory usage.
*   **Goal**: Launch the app in debug mode, hit a breakpoint, and inspect the heap memory.

## Phase 2: Building Web APIs (Express.js)

### 4. Exposing REST Endpoints
*   **Concepts**: Setting up an **Express** server, defining Routes (GET, POST), and handling Request/Response objects.
*   **Java Equivalent**: Spring Boot `@RestController`.
*   **Goal**: Build a simple "Product Inventory" API.

### 5. Middleware & Authentication
*   **Concepts**: Express Middleware chain.
*   **Java Equivalent**: Servlet Filters / Spring Security Filters.
*   **Goal**: Implement a **Basic Auth** middleware that restricts access to specific endpoints (e.g., `admin/admin`).

### 6. Making External REST Calls
*   **Concepts**: Using **Axios** (popular) or native `fetch`.
*   **Java Equivalent**: `RestTemplate` or `WebClient`.
*   **Goal**: Create an endpoint that fetches data from a public API (like `jsonplaceholder.typicode.com`) and returns it to the client.

## Phase 3: Recommended Additions (Production Readiness)

### 7. Environment Configuration
*   **Concepts**: Using `dotenv` to manage configuration (ports, secrets) outside of code.
*   **Java Equivalent**: `application.properties`.

### 8. Input Validation
*   **Concepts**: Using libraries like **Zod** or **Joi** to validate request bodies at runtime.
*   **Java Equivalent**: Bean Validation (`@NotNull`, `@Size`).

### 9. Global Error Handling
*   **Concepts**: Centralized middleware to catch errors and return consistent JSON error responses.
*   **Java Equivalent**: `@ControllerAdvice`.
