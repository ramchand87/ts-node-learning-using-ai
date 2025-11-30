/**
 * Demonstrates a memory leak for profiling purposes.
 * 
 * Usage:
 * 1. Run with inspector: node --inspect -r ts-node/register src/debug_demo/MemoryLeak.ts
 * 2. Open Chrome and go to chrome://inspect
 * 3. Click "inspect" under Remote Target
 * 4. Go to "Memory" tab and take Heap Snapshots to see memory growth.
 */

const leakyArray: string[] = [];

function createLeak() {
    // Create a large string (approx 1MB)
    const data = "x".repeat(1024 * 1024);

    // Store it in a global array, preventing garbage collection
    leakyArray.push(data);

    // Log current usage
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`Leaky Array Size: ${leakyArray.length} MB | Heap Used: ${Math.round(used * 100) / 100} MB`);
}

console.log("--- Memory Leak Demo ---");
console.log("Starting leak... Press Ctrl+C to stop.");

// Leak 1MB every 500ms
setInterval(createLeak, 500);
