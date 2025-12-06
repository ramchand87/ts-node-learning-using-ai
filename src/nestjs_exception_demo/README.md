# NestJS Global Error Handling Demo

This module demonstrates how to use **Exception Filters** to create a consistent error response structure (e.g., standardizing 404, 500, 403 errors).

## Concepts

### 1. Exception Filters
Filters handle exceptions thrown by your application. They let you control the exact response sent back to the client.
- **Java Equivalent**: `@ControllerAdvice` + `@ExceptionHandler`.

### 2. Standardized Response
We want every error to look like this:
```json
{
  "statusCode": 403,
  "timestamp": "2023-10-27T10:00:00.000Z",
  "path": "/demo/forbidden",
  "message": "You are not allowed here!"
}
```

## Files
- `http-exception.filter.ts`: The global filter logic.
- `demo.controller.ts`: Endpoints that intentionally throw errors to test the filter.
- `main.ts`: Registers the filter globally with `app.useGlobalFilters()`.

## How to Run
1.  Run the demo:
    ```bash
    npm run start:exception
    ```
2.  Trigger errors:
    *   **403**: `http://localhost:3004/demo/forbidden`
    *   **500**: `http://localhost:3004/demo/error`
    *   **418**: `http://localhost:3004/demo/custom`

### Java Comparison
> [!TIP]
> **Coming from Java?** Check out our **[Spring Boot vs NestJS Exception Guide](./SPRING_BOOT_COMPARISON.md)**.

## Verification
### Swagger
Open [http://localhost:3004/api](http://localhost:3004/api).

### Component Tests
Since exception handling is a framework feature, we verify it by running the app and hitting endpoints (E2E style) or standard unit tests.
