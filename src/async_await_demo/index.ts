import { promises as fs } from 'fs';
import * as path from 'path';

// 1. Simulate a delay using a Promise
function simulateDelay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// 2. Simulate fetching user data
async function fetchUserData(id: number): Promise<{ id: number; name: string }> {
    console.log(`Fetching data for user ${id}...`);
    await simulateDelay(1000); // Wait for 1 second
    return { id: id, name: `User_${id}` };
}

// 3. Main function using Async/Await
async function main() {
    console.log('--- Async/Await Demo Started ---');

    try {
        // Example 1: Sequential execution
        console.log('\n1. Sequential Fetching:');
        const user1 = await fetchUserData(1);
        console.log(`   Received: ${JSON.stringify(user1)}`);

        const user2 = await fetchUserData(2);
        console.log(`   Received: ${JSON.stringify(user2)}`);

        // Example 2: Parallel execution (Promise.all)
        console.log('\n2. Parallel Fetching (Faster):');
        const start = Date.now();
        const [u3, u4] = await Promise.all([
            fetchUserData(3),
            fetchUserData(4)
        ]);
        const duration = Date.now() - start;
        console.log(`   Received: ${JSON.stringify(u3)} and ${JSON.stringify(u4)}`);
        console.log(`   Time taken: ${duration}ms (approx 1s instead of 2s)`);

        // Example 3: File I/O with fs/promises
        console.log('\n3. File I/O:');
        const filePath = path.join(__dirname, 'sample.txt');
        await fs.writeFile(filePath, 'This is a test file created asynchronously.');
        console.log(`   Created file at: ${filePath}`);

        const content = await fs.readFile(filePath, 'utf-8');
        console.log(`   Read content: "${content}"`);

        // Cleanup
        await fs.unlink(filePath);
        console.log('   Deleted file.');

    } catch (error) {
        console.error('An error occurred:', error);
    }

    console.log('\n--- Demo Finished ---');
}

main();
