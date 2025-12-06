# Java vs Node.js: Logging

This guide compares logging in Java (SLF4J/Logback) with Node.js (Winston).

## Comparison Table

| Feature | Node.js (Winston) | Java (SLF4J + Logback) |
| :--- | :--- | :--- |
| **Logger Creation** | `winston.createLogger({...})` | `LoggerFactory.getLogger(Class.class)` |
| **Log Levels** | Error, Warn, Info, Http, Verbose, Debug, Silliest | Error, Warn, Info, Debug, Trace |
| **Formatting** | `winston.format.json()`, `simple()` | `PATTERN` in `logback.xml` |
| **Transports** | Console, File, Http (configured in code) | Appenders (Console, File, RollingFile) in xml/properties |

## Key Differences

### 1. Configuration in Code vs XML
- **Java**: Typically configured via external files like `logback.xml` or `log4j2.properties` so ops teams can change levels without recompiling.
- **Node.js (Winston)**: Typically configured **in code** (JavaScript/TypeScript). While you can load config from files, the setup logic is usually part of the application startup `main.ts` or a logger module.

### 2. Structured Logging (JSON)
- **Node.js**: JSON logging is extremely common and native to Winston (`format.json()`). It's the standard for cloud-native Node apps.
- **Java**: Requires additional dependencies (e.g., `logstash-logback-encoder`) to output logs as JSON cleanly.
