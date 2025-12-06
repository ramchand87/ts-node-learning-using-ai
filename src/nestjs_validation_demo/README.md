# NestJS Input Validation Demo

This module demonstrates how to validate incoming request data using `class-validator` and DTOs.

## Concepts

### 1. DTO (Data Transfer Object)
A class that defines the shape of data being sent over the network. We decorate properties with validation rules.
- `@IsEmail()`
- `@MinLength(8)`
- `@IsInt()`

### 2. ValidationPipe
A built-in global pipe that automatically validates payloads against DTOs.
- **Whitelist**: Automatically strips properties that do not exist in the DTO.
- **Error Handling**: Automatically returns `400 Bad Request` with detailed error messages if validation fails.

### 3. Libraries Explained
The validation system relies on two key libraries:

1.  **`class-transformer`**:
    *   **Purpose**: Transforms plain JSON objects (from standard network requests) into actual instances of your DTO class.
    *   **Java Analogy**: Similar to **JAXB** or JSON binding libraries (Jackson) that map JSON to Java Objects.
    *   *Why?* Decorators belong to the class prototype. We need a real class instance, not just a plain JS object, for validation to work.

2.  **`class-validator`**:
    *   **Purpose**: Validates the properties of the class instance based on decorators.
    *   **Java Analogy**: The standard **Bean Validation (JSR-380)** implementation (like Hibernate Validator).
    *   *Why?* It provides the standard `@IsInt`, `@IsEmail` rules.

## Files
- `dto/create-user.dto.ts`: The DTO class with validation decorators.
- `users.controller.ts`: The controller using the DTO.
- `main.ts`: Where `app.useGlobalPipes(new ValidationPipe())` is configured.

## How to Run
1.  Run the demo:
    ```bash
    npm run start:validation
    ```
2.  Send a POST request to `http://localhost:3003/users`.

### Java Comparison
> [!TIP]
> **Coming from Java?** Check out our **[Spring Boot vs NestJS Validation Guide](./SPRING_BOOT_COMPARISON.md)**.

## Verification

### Swagger
Open [http://localhost:3003/api](http://localhost:3003/api) to try out the endpoint.

### Postman
Import `postman_collection.json` which contains examples for Valid and Invalid requests.

### Unit Tests
```bash
npx jest src/nestjs_validation_demo/users.controller.spec.ts
```
