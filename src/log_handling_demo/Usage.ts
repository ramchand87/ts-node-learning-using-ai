import { logger } from './Logger';

/**
 * Demonstrates usage of the configured Winston logger.
 */
function main() {
    console.log("--- Log Handling Demo ---");
    console.log("Check the 'logs' directory for output files.\n");

    // 1. Standard Logging
    logger.info("Application started.");
    logger.warn("This is a warning message.");
    logger.debug("This debug message will NOT show up in console (default level is info).");

    // 2. Logging Objects (Structured Logging)
    const user = { id: 1, name: "John Doe", role: "Admin" };
    logger.info(`User logged in: ${JSON.stringify(user)}`);

    // 3. Error Logging
    try {
        throw new Error("Something went wrong!");
    } catch (err) {
        // Pass the error object directly to log stack trace
        logger.error(err);
    }

    logger.info("Application finished.");
}

if (require.main === module) {
    main();
}
