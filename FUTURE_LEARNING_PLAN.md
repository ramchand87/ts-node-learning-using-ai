# Node.js Future Learning Plan

This document outlines the roadmap for upcoming learning sessions. We will tackle these topics one by one.

## Phase 1: Core Node.js & Tooling




## Phase 2: Building Web APIs (NestJS)

### 4. NestJS Fundamentals (Modules & Controllers)
*   **Concepts**: Setting up a **NestJS** project, Modules, Controllers (GET, POST), and Dependency Injection.
*   **Java Equivalent**: Spring Boot `@SpringBootApplication`, `@RestController`, `@Autowired`.
*   **Goal**: Create a "Product Inventory" API using NestJS CLI.

### 5. Guards & Interceptors (Authentication)
*   **Concepts**: NestJS **Guards** (for Auth) and **Interceptors** (for logging/transforming).
*   **Java Equivalent**: Spring Security, AspectJ / AOP.
*   **Goal**: Implement a Basic Auth Guard to protect specific routes.

### 6. Making External REST Calls (HttpModule)
*   **Concepts**: Using **HttpModule** (Axios wrapper) and **RxJS** Observables.
*   **Java Equivalent**: `WebClient` (Reactive) or `RestTemplate`.
*   **Goal**: Fetch data from a public API using NestJS HttpService.

## Phase 3: Production Readiness (NestJS Best Practices)

### 7. Environment Configuration
*   **Concepts**: Using `@nestjs/config` to manage environment variables.
*   **Java Equivalent**: `application.properties` / `@Value`.

### 8. Input Validation
*   **Concepts**: Using **Pipes**, `class-validator`, and DTOs (Data Transfer Objects).
*   **Java Equivalent**: Bean Validation (`@NotNull`, `@Size`) with `@Valid`.

### 9. Global Error Handling
*   **Concepts**: **Exception Filters** to handle errors globally.
*   **Java Equivalent**: `@ControllerAdvice` / `@ExceptionHandler`.
