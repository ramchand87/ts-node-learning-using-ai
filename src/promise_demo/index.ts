// 1. What is a Promise?
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// It has 3 states:
// - Pending: Initial state, neither fulfilled nor rejected.
// - Fulfilled (Resolved): The operation completed successfully.
// - Rejected: The operation failed.

function orderPizza(type: string): Promise<string> {
    console.log(`Ordering a ${type} pizza...`);

    return new Promise((resolve, reject) => {
        // Simulate cooking time (async operation)
        setTimeout(() => {
            const isShopOpen = true; // Change to false to test rejection

            if (isShopOpen) {
                // Success! We call resolve with the result
                resolve(`Here is your ${type} pizza! 🍕`);
            } else {
                // Failure! We call reject with an error
                reject(new Error("Sorry, the pizza shop is closed."));
            }
        }, 2000); // 2 seconds delay
    });
}

// 2. Consuming a Promise using .then() and .catch() (The "Old" Way)
function runWithThen(): Promise<void> {
    console.log("--- Method 1: .then() ---");
    return orderPizza("Pepperoni")
        .then((pizza) => {
            console.log("Success:", pizza);
        })
        .catch((error) => {
            console.error("Error:", error.message);
        })
        .finally(() => {
            console.log("Order process finished (Method 1).");
        });
}

// 3. Consuming a Promise using async/await (The "Modern" Way)
async function runWithAsyncAwait() {
    console.log("\n--- Method 2: async/await ---");
    try {
        const pizza = await orderPizza("Margherita");
        console.log("Success:", pizza);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        console.log("Order process finished (Method 2).");
    }
}

// Main function to orchestrate the execution
async function main() {
    await runWithThen();
    await runWithAsyncAwait();
}

main();
