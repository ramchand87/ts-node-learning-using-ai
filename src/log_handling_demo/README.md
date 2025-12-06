# Log Handling in Node.js (Winston)

This module demonstrates structured logging using **Winston**, the most popular logging library for Node.js.

## Concepts

### 1. Structured Logging
Instead of printing plain text strings (like `console.log`), structured logging outputs logs in a machine-readable format (usually JSON). This allows log aggregation tools (Splunk, ELK Stack, Datadog) to parse and index logs efficiently.

### 2. Log Levels
Winston supports standard logging levels (RFC5424):
- **error**: 0
- **warn**: 1
- **info**: 2
- **http**: 3
- **verbose**: 4
- **debug**: 5
- **silly**: 6

### 3. Transports
Transports define *where* the logs should go.
- **Console**: Output to the terminal (useful for development).
- **File**: Write to a file (useful for persistence).
- **Http**: Send logs to an external API.

## Java Comparison

> [!TIP]
> **Coming from Java?** Check out our **[Java vs Node.js Logging Guide](./JAVA_COMPARISON.md)**.

## Files

- **Logger.ts**: Configuration of the Winston logger instance.
- **Usage.ts**: Demonstration of using the logger in an application.
