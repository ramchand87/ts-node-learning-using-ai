# NestJS Fundamentals

This module demonstrates the core building blocks of a NestJS application.

## Concepts

> [!TIP]
> **Coming from Java?** Check out our **[Spring Boot vs NestJS Migration Guide](./SPRING_BOOT_COMPARISON.md)** for a direct mapping of concepts.

### 1. Modules (`@Module`)
Organize the application structure. Every NestJS app has at least one module (the root module).
- **Java Equivalent**: Spring Boot `@Configuration` classes or package structure.

### 2. Controllers (`@Controller`)
Handle incoming requests and return responses.
- **Java Equivalent**: Spring Boot `@RestController`.

### 3. Providers / Services (`@Injectable`)
Handle business logic and are injected into controllers.
- **Java Equivalent**: Spring Boot `@Service`, `@Component`.
- **Example**: `ProductService` (Business logic), `LoggingInterceptor` (Cross-cutting concern).

### 4. Dependency Injection
NestJS has a built-in DI container. You define providers in modules and inject them via constructor injection.
- **Java Equivalent**: Spring's `@Autowired` (constructor injection is preferred in both).

### 5. Guards (`CanActivate`)
Determine whether a given request will be handled by the route handler or not.
- **Java Equivalent**: Spring Security Filters / `@PreAuthorize`.
- **Example**: `AuthGuard` checks for a secret token header.

### 6. Interceptors (`NestInterceptor`)
Intercept the request/response stream to add extra logic (logging, transformation, etc.).
- **Global Scope**: Applied to every route (e.g. invalidating cache, logging).
    - **Example**: `LoggingInterceptor` (in `main.ts`).
- **Class Scope**: Applied to a specific Controller using `@UseInterceptors()`.
    - **Example**: `TransformInterceptor` wraps response in `{ data: ... }`.
- **Method Scope**: Applied to a specific route handler.

### 7. Decorator Cheat Sheet
Why are they separated? Beacuse they run at different stages of the request lifecycle.

| Feature | Interface | Decorator | Purpose |
| :--- | :--- | :--- | :--- |
| **Guard** | `CanActivate` | `@UseGuards()` | **Security/Access Control**. Decides if request continues. |
| **Interceptor** | `NestInterceptor` | `@UseInterceptors()` | **Wrap Logic**. Modify request before handler or response after handler. |
| **Pipe** | `PipeTransform` | `@UsePipes()` | **Validation/Transformation**. Transforms input data (e.g., string to number). |
| **Filter** | `ExceptionFilter` | `@UseFilters()` | **Error Handling**. Catches exceptions and formats error responses. |

## Files

- **main.ts**: The entry point. Applies global interceptors/pipes.
- **app.module.ts**: The root module.
- **product.controller.ts**: REST endpoints. Protected by `AuthGuard` & transformed by `TransformInterceptor`.
- **product.service.ts**: Business logic.
- **auth.guard.ts**: Simple token-based security check.
- **logging.interceptor.ts**: Logs incoming requests (Global).
- **transform.interceptor.ts**: Standardises API response structure (Class-level).

## Endpoints

| Method | Path | Description | Access | Example |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/products` | List all products | Public | `curl http://localhost:3000/products` |
| `GET` | `/products/:id` | Get by ID | Public | `curl http://localhost:3000/products/1` |
| `POST` | `/products` | Create product | **Protected** | `Invoke-RestMethod ... -Headers @{Authorization="secret_token"}` |

## Swagger API Docs
Open [http://localhost:3000/api](http://localhost:3000/api) to see the Swagger UI.

> **Need help setting this up?** Check out our **[Swagger Setup Guide](./SWAGGER_GUIDE.md)** for a full tutorial.

## Postman
Import `postman_collection.json` to test the APIs. Note: The `POST /products` request is pre-configured with the required `Authorization: secret_token` header.
