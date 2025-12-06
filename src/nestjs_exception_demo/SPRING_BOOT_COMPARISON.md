# Spring Boot vs NestJS: Global Error Handling

This guide compares global exception handling in Spring Boot (`@ControllerAdvice`) vs NestJS (`ExceptionFilter`).

## Comparison Table

| Feature | NestJS (`ExceptionFilter`) | Spring Boot (`@ControllerAdvice`) |
| :--- | :--- | :--- |
| **Annotation** | `@Catch(HttpException)` | `@ControllerAdvice` + `@ExceptionHandler` |
| **Global Registration** | `app.useGlobalFilters(...)` | Auto-detected (Component Scan) |
| **Access** | Access to `Request`, `Response`, `Next` | Access to `HttpServletRequest`, `Model` |
| **Response Control** | Manual `response.status().json()` | Return POJO / `ResponseEntity` |

## Key Differences

### 1. Granularity
*   **NestJS**: You can apply filters Globally, at the Controller level, or at the individual Route level.
*   **Spring Boot**: `@ControllerAdvice` is typically global. Local handling is done via `@ExceptionHandler` inside the controller.

### 2. Content Negotiation
*   **NestJS**: Filters typically manually construct the JSON response using `express` response object.
*   **Spring Boot**: Often relies on Jackson to serialize the Pojo returned from the handler method.

### 3. Execution Order
*   **NestJS Filters** run **after** Interceptors and Guards (if they throw). They are the last line of defense.
