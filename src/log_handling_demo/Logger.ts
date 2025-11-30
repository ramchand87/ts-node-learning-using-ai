import * as winston from 'winston';
import * as path from 'path';

// Define log directory
const logDir = 'logs';

// Define log format
const logFormat = winston.format.printf(({ timestamp, level, message, stack }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
});

/**
 * Configures and exports the Winston logger instance.
 * Equivalent to configuring Logback/Log4j in Java.
 */
export const logger = winston.createLogger({
    level: 'info', // Default log level
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }), // Log stack trace for errors
        logFormat
    ),
    transports: [
        // 1. Console Transport (for development)
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(), // Add colors to console output
                logFormat
            )
        }),
        // 2. File Transport (for persistence)
        // Write all logs with level 'info' and below to combined.log
        new winston.transports.File({
            filename: path.join(logDir, 'combined.log'),
            level: 'info'
        }),
        // Write all logs with level 'error' and below to error.log
        new winston.transports.File({
            filename: path.join(logDir, 'error.log'),
            level: 'error'
        })
    ]
});
