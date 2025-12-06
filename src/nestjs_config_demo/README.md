# NestJS Environment Configuration Demo

This module demonstrates how to manage configuration and environment variables using `@nestjs/config`.

## Concepts

### 1. The 12-Factor App
Config should be stored in the environment, not in the code. This ensures secrets (like API tokens) are not committed to Git.

### 2. NestJS ConfigModule
- Loads `.env` files.
- Exposes a `ConfigService` to read values.
- Provides type safety and validation (optional).

## Files
- `.env`: Stores key-value pairs (`API_KEY=...`).
- `app.module.ts`: Imports `ConfigModule.forRoot()`.
- `app.service.ts`: Uses `ConfigService.get('KEY')`.

## Advanced: Loading from External Sources (AWS)
In Spring Boot, you might use `spring-cloud-starter-aws-secrets-manager-config`. In NestJS, you use **Custom Configuration Loaders**.

You can pass an `async` function to `ConfigModule.load`. This function runs at startup, fetches secrets, and returns them as a config object.

### Example: AWS Secrets Manager
```typescript
// aws-config.loader.ts
import { SecretsManager } from '@aws-sdk/client-secrets-manager';

export default async () => {
  const client = new SecretsManager({ region: 'us-east-1' });
  const data = await client.getSecretValue({ SecretId: 'MyProdSecrets' });
  
  // Parse JSON secret string
  return JSON.parse(data.SecretString); 
};

// app.module.ts
ConfigModule.forRoot({
  isGlobal: true,
  load: [awsConfigLoader], // <--- Injected here
});
```
*Note: This halts application startup until the secrets are fetched, ensuring dependencies are set up correctly before the app accepts requests.*

## How to Run
1.  Run the demo:
    ```bash
    npm run start:config
    ```
2.  Check the endpoint:
    ```bash
    curl http://localhost:3002/config
    ```

## Deployment & Environments

### 1. Packaging (No JARs)
Unlike Java, Node.js applications are not packaged into a single binary (like a `.jar`).
1.  **Build**: `npm run build` compiles TypeScript to JavaScript in the `dist/` folder.
2.  **Deploy**: You copy the `dist/` folder, `package.json`, and `package-lock.json` to the server.
3.  **Install**: Run `npm install --production` to fetch dependencies.
4.  **Run**: `node dist/main.js`.

### 2. Dynamic Configurations
*   **System Variables**: In production (Docker/Kubernetes), set environment variables directly (e.g., `DATABASE_HOST`). The `ConfigModule` reads these automatically.
*   **Multiple Env Files**: For local dev, you can use `.env.development`, `.env.test`, etc., and load them conditionally:
    ```typescript
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}` || '.env',
    });
    ```

## Spring Boot Comparison

> [!TIP]
> **Coming from Java?** Check out our **[Spring Boot vs NestJS Configuration Guide](./SPRING_BOOT_COMPARISON.md)**.

## Validation

### Swagger API Docs
Open [http://localhost:3002/api](http://localhost:3002/api) to see the generated Swagger UI.
> **Note**: Swagger is disabled if `NODE_ENV=production`.

### Postman
Import `postman_collection.json` to verify the configuration endpoint.

### Unit Tests
Run the unit test to verify that `AppService` correctly retrieves keys from `ConfigService`.
```bash
npx jest src/nestjs_config_demo/app.service.spec.ts
```
