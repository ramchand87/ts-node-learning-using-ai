# Spring Boot vs NestJS: Configuration

This guide compares configuration management in Spring Boot vs NestJS.

## Comparison Table

| Feature | NestJS (`@nestjs/config`) | Spring Boot |
| :--- | :--- | :--- |
| **File Format** | `.env` (Standard) | `application.properties` or `application.yml` |
| **Separation** | Environment Variables (12-Factor) | External files / Spring Cloud Config |
| **Injection** | `ConfigService.get('KEY')` | `@Value("${key}")` or `@ConfigurationProperties` |
| **Typed Access** | Optional (using validation schema) | Strong (`@ConfigurationProperties`) |

## Key Differences

### 1. Variables vs Properties
- **Spring Boot**: Has a hierarchy (CLI args > JNDI > System Properties > application.properties).
- **NestJS**: Primarily relies on `.env` files via `dotenv` under the hood. It treats configuration as environment variables first.

### 2. Accessing Values
- **Java**:
  ```java
  @Value("${database.host}")
  private String dbHost;
  ```
- **NestJS**:
  ```typescript
  constructor(private configService: ConfigService) {}
  ...
  this.configService.get<string>('DATABASE_HOST');
  ```
