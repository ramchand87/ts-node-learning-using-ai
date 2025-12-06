# Spring Boot vs NestJS: Input Validation

This guide compares input validation in Spring Boot (Bean Validation) vs NestJS (`class-validator`).

## Comparison Table

| Feature | NestJS (`class-validator`) | Spring Boot (Bean Validation) |
| :--- | :--- | :--- |
| **Library** | `class-validator` + `class-transformer` | Hibernate Validator (JSR-303/380) |
| **Activation** | Global Pipe: `app.useGlobalPipes(new ValidationPipe())` | `@Valid` or `@Validated` on Controller method |
| **Decorators** | `@IsEmail()`, `@Min()`, `@IsString()` | `@Email`, `@Min`, `@NotNull` |
| **Error Response** | `{ statusCode: 400, message: [...] }` | `MethodArgumentNotValidException` (Custom handler needed for clean JSON) |

## Key Differences

### 1. Global vs Local
- **NestJS**: Typically configured **globally** once in `main.ts`. All DTOs are validated automatically if used in controllers.
- **Spring Boot**: You must explicitly add `@Valid` to the request body argument in the controller method: `public void create(@Valid @RequestBody UserDto user)`.

### 2. Whitelisting (Sanitization)
- **NestJS**: `ValidationPipe({ whitelist: true })` automatically strips out any properties from the request JSON that are defined in the DTO. This prevents "mass assignment" security vulnerabilities.
- **Spring Boot**: Does not strictly strip unknown fields by default; often requires mapping libraries like MapStruct or custom logic.
