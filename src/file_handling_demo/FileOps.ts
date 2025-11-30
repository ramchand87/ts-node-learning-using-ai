import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';

/**
 * Demonstrates basic file operations in Node.js.
 * Equivalent to Java's java.io.File and java.nio.file.Files.
 */
async function main() {
    console.log("--- File Operations Demo ---");

    // 1. Path Manipulation
    // Java: Paths.get("src", "file_handling_demo", "example.txt")
    const dirPath = path.join(__dirname, 'data'); // __dirname is current file's directory
    const filePath = path.join(dirPath, 'example.txt');

    console.log(`Target Directory: ${dirPath}`);
    console.log(`Target File: ${filePath}`);

    // Ensure directory exists
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        console.log("Directory created.");
    }

    // 2. Synchronous Write (Blocking)
    // Java: Files.write(path, content.getBytes())
    console.log("\n[Sync] Writing to file...");
    try {
        fs.writeFileSync(filePath, "Hello from Synchronous Write!\n");
        console.log("Write successful.");
    } catch (err) {
        console.error("Error writing file:", err);
    }

    // 3. Synchronous Read (Blocking)
    // Java: Files.readAllLines(path)
    console.log("\n[Sync] Reading from file...");
    try {
        const content = fs.readFileSync(filePath, 'utf-8'); // Specify encoding to get string
        console.log("Read content:", content.trim());
    } catch (err) {
        console.error("Error reading file:", err);
    }

    // 4. Asynchronous Write (Non-blocking - Promise based)
    // Preferred in Node.js applications
    console.log("\n[Async] Appending to file...");
    try {
        await fsPromises.appendFile(filePath, "Hello from Asynchronous Append!\n");
        console.log("Append successful.");
    } catch (err) {
        console.error("Error appending file:", err);
    }

    // 5. Asynchronous Read (Non-blocking - Promise based)
    console.log("\n[Async] Reading from file...");
    try {
        const content = await fsPromises.readFile(filePath, 'utf-8');
        console.log("Read content:\n" + content.trim());
    } catch (err) {
        console.error("Error reading file:", err);
    }

    // Cleanup (Optional)
    // fs.unlinkSync(filePath);
    // fs.rmdirSync(dirPath);
}

export { main };

if (require.main === module) {
    main().catch(console.error);
}
