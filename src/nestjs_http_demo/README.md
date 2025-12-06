# NestJS HttpModule Demo

This module demonstrates how to make external REST calls using the `@nestjs/axios` package, which is a wrapper around the popular `axios` library.

## Concepts

### 1. HttpService
Exposes methods like `.get()`, `.post()`, etc. It returns an **RxJS Observable** by default, which integrates well with NestJS streams.

### 2. Observable vs Promise
While Axios itself uses Promises, NestJS wraps them in Observables.
- **Benefit**: You can use RxJS operators like `map`, `tap`, `catchError` to manipulate the data stream before it reaches the controller.
- **Usage**: `response.data` is nested inside the Axios response object. We often use `.pipe(map(resp => resp.data))` to extract it.

## Files
- `users.service.ts`: Makes the HTTP GET request.
- `users.controller.ts`: Handles the incoming request and returns the observable.
- `app.module.ts`: Imports `HttpModule`.

## How to Run

1.  Stop any other running NestJS instances.
2.  Run this demo:
    ```bash
    npx ts-node src/nestjs_http_demo/main.ts
    ```
3.  Test the endpoint:
    ```bash
    curl http://localhost:3001/users
    ```

### Swagger API Docs
Open [http://localhost:3001/api](http://localhost:3001/api) to see the Swagger UI.

### Postman
Import the file `postman_collection.json` into Postman to test the endpoints.

## Spring Boot Comparison

> [!TIP]
> **Coming from Java?** Check out our **[Spring Boot vs NestJS HTTP Client Guide](./SPRING_BOOT_COMPARISON.md)**.

## Unit Tests

We have added a unit test for `UsersService` that mocks the `HttpService`.

```bash
npx jest src/nestjs_http_demo/users.service.spec.ts
```
