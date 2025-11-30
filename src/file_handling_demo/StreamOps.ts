import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

/**
 * Demonstrates Streams and Readline in Node.js.
 * Useful for processing large files without loading everything into memory.
 * Java Equivalent: BufferedReader.readLine() inside a loop.
 */
async function main() {
    console.log("--- Stream Operations Demo ---");

    const dirPath = path.join(__dirname, 'data');
    const inputFilePath = path.join(dirPath, 'large_input.txt');
    const outputFilePath = path.join(dirPath, 'filtered_output.txt');

    // Ensure directory exists
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    // 1. Generate a dummy large file for demonstration
    if (!fs.existsSync(inputFilePath)) {
        console.log("Generating dummy large file...");
        const writeStream = fs.createWriteStream(inputFilePath);
        for (let i = 0; i < 1000; i++) {
            writeStream.write(`Line ${i}: This is some log data. Level=${i % 2 === 0 ? 'INFO' : 'ERROR'}\n`);
        }
        writeStream.end();
        // Wait for finish
        await new Promise<void>(resolve => writeStream.on('finish', () => resolve()));
        console.log("Dummy file generated.");
    }

    // 2. Read file line-by-line using Readline and Streams
    // This is memory efficient even for GB-sized files.
    console.log(`\nReading from ${inputFilePath} and filtering ERROR logs...`);

    const fileStream = fs.createReadStream(inputFilePath);

    const rl = readline.createInterface({
        input: fileStream
    });

    const outputStream = fs.createWriteStream(outputFilePath);

    let lineCount = 0;
    let errorCount = 0;

    for await (const line of rl) {
        lineCount++;
        // Process each line
        if (line.includes('Level=ERROR')) {
            outputStream.write(line + '\n');
            errorCount++;
        }
    }

    console.log(`\nProcessing complete.`);
    console.log(`Total lines read: ${lineCount}`);
    console.log(`Error lines written to ${outputFilePath}: ${errorCount}`);
}

export { main };

if (require.main === module) {
    main().catch(console.error);
}
