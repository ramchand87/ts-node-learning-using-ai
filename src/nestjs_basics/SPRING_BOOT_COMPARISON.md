# From Spring Boot to NestJS: A Migration Guide

NestJS is heavily inspired by Angular and Spring Boot. If you know Spring Boot, you already know 80% of NestJS concepts. This guide maps your existing knowledge to the NestJS world.

## 1. Core Building Blocks

| Concept | Spring Boot (Java) | NestJS (TypeScript) | Notes |
| :--- | :--- | :--- | :--- |
| **Bootstrapping** | `SpringApplication.run(App.class)` | `NestFactory.create(AppModule)` | The entry point to create the application context. |
| **Configuration** | `@Configuration` / `@SpringBootApplication` | `@Module()` | Organizes the dependency injection container. |
| **REST Controller** | `@RestController` | `@Controller()` | Handles HTTP requests. |
| **Route Mapping** | `@GetMapping("/path")` | `@Get('path')` | Maps HTTP methods to methods. |
| **Path Variable** | `@PathVariable("id")` | `@Param('id')` | Extracts parameters from URL. |
| **Request Body** | `@RequestBody` | `@Body()` | Extracts JSON body to an object (DTO). |
| **Service/Bean** | `@Service`, `@Component`, `@Bean` | `@Injectable()` | Marks a class as a provider that can be injected. |
| **Dependency Injection** | `@Autowired` (Constructor/Field) | Constructor Injection | NestJS uses constructor-based DI by default. |

## 2. Request Lifecycle (The "Middleware" Chain)

NestJS splits the request lifecycle into finer-grained stages than the standard Servlet Filters.

| Stage | Spring Boot Equivalent | NestJS Component | Purpose |
| :--- | :--- | :--- | :--- |
| **Security** | Spring Security Filters / `@PreAuthorize` | **Guards** (`CanActivate`) | Auhtentication & Authorization. Returns `true`/`false`. |
| **AOP / Wrappers** | Interceptors / AspectJ (`@Aspect`) | **Interceptors** (`NestInterceptor`) | Modify request *before* handler or response *after* handler (e.g., logging, caching). |
| **Validation** | Bean Validation (`@Valid` + Hibernate Validator) | **Pipes** (`PipeTransform`) | Validate or transform input data (e.g., String -> Int, Joi/Zod validation). |
| **Error Handling** | `@ControllerAdvice` + `@ExceptionHandler` | **Exception Filters** (`ExceptionFilter`) | Catch exceptions thrown anywhere and format the HTTP response. |

## 3. Other Key Concepts

| Concept | Spring Boot | NestJS |
| :--- | :--- | :--- |
| **Data Objects** | POJO / Record | Class / Interface (DTO) | TypeScript interfaces disappear at runtime; Classes are preserved. |
| **Database (ORM)** | JPA / Hibernate | TypeORM / Prisma / Mongoose | Usually TypeORM is the closest to Hibernate (JPA-like). |
| **Reactive** | Spring WebFlux (Project Reactor) | RxJS (Observables) | NestJS usage of RxJS is very powerful for streams. |
| **Testing** | JUnit + Mockito | Jest | Jest includes test runner, assertions, and mocking (all-in-one). |

## 4. Fundamental Difference: Threading Model

> [!IMPORTANT]
> **This is the biggest mindset shift.**

*   **Spring Boot (Servlet)**: **Multi-threaded**. Each request gets its own thread from a thread pool. You can perform blocking I/O (like `Thread.sleep` or blocking DB calls) without stopping the whole server.
*   **NestJS (Node.js)**: **Single-threaded Event Loop**. All requests are handled by a **single thread**.
    *   **NEVER BLOCK THE THREAD**: Never use extensive CPU loops or synchronous I/O (like `fs.readFileSync`) in a controller.
    *   **Async is King**: Always use `async/await` and Promises for I/O operations (DB, HTTP calls, File Server).

## 5. Directory Structure Comparison

**Spring Boot**:
```
src/main/java/com/example/demo
  ├── config/
  ├── controller/
  ├── service/
  ├── repository/
  └── DemoApplication.java
```

**NestJS** (Modular by default):
```
src/
  ├── main.ts            (Entry point)
  ├── app.module.ts      (Root Module)
  ├── product/           (Feature Module)
  │   ├── product.module.ts
  │   ├── product.controller.ts
  │   ├── product.service.ts
  │   └── dto/
```
In NestJS, we group by **Feature** (Module), whereas Spring often groups by **Layer** (Controller vs Service packages), though both support either style.
