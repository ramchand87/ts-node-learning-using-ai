# Spring Boot vs NestJS: HTTP Client

This guide compares making external HTTP calls in Spring Boot vs NestJS.

## Comparison Table

| Feature | NestJS | Spring Boot |
| :--- | :--- | :--- |
| **Library** | `@nestjs/axios` (wraps Axios) | `RestTemplate` (Legacy) or `WebClient` (Modern/Reactive) |
| **Return Type** | `Observable<AxiosResponse>` | `ResponseEntity<T>` (RestTemplate) or `Mono<ClientResponse>` (WebClient) |
| **Data Extraction** | `.pipe(map(resp => resp.data))` | `response.getBody()` |
| **Async Model** | Core (Non-blocking I/O) | Optional (`Flux`/`Mono` with WebFlux) |

## Key Differences

### 1. Observables vs Monos
NestJS `HttpService` returns an RxJS `Observable`. This is conceptually very similar to Project Reactor's `Mono` in Spring WebFlux.
- **Java**: `webClient.get().retrieve().bodyToMono(String.class)`
- **NestJS**: `httpService.get().pipe(map(r => r.data))`

### 2. Blocking vs Non-Blocking
- **Spring `RestTemplate`**: Blocks the thread until response arrives.
- **NestJS `HttpService`**: Non-blocking. Uses the Node.js Event Loop.
