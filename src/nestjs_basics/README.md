# NestJS Fundamentals

This module demonstrates the core building blocks of a NestJS application.

## Concepts

### 1. Modules (`@Module`)
Organize the application structure. Every NestJS app has at least one module (the root module).
- **Java Equivalent**: Spring Boot `@Configuration` classes or package structure.

### 2. Controllers (`@Controller`)
Handle incoming requests and return responses.
- **Java Equivalent**: Spring Boot `@RestController`.

### 3. Providers / Services (`@Injectable`)
Handle business logic and are injected into controllers.
- **Java Equivalent**: Spring Boot `@Service`, `@Component`.

### 4. Dependency Injection
NestJS has a built-in DI container. You define providers in modules and inject them via constructor injection.
- **Java Equivalent**: Spring's `@Autowired` (constructor injection is preferred in both).

## Files

- **main.ts**: The entry point of the application.
- **app.module.ts**: The root module.
- **product.controller.ts**: Defines REST endpoints for products.
- **product.service.ts**: Manages product data (in-memory).

## Endpoints

| Method | Path | Description | Example |
| :--- | :--- | :--- | :--- |
| `GET` | `/products` | List all products | `curl http://localhost:3000/products` |
| `GET` | `/products?name=...` | Filter by name | `curl http://localhost:3000/products?name=Mouse` |
| `GET` | `/products/:id` | Get by ID | `curl http://localhost:3000/products/1` |
| `POST` | `/products` | Create product | `Invoke-RestMethod ...` |
