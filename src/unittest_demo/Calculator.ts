export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    // Async method to demonstrate async testing
    async multiplyAsync(a: number, b: number): Promise<number> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(a * b);
            }, 100);
        });
    }

    // Method with callback to demonstrate callback testing
    divideWithCallback(a: number, b: number, callback: (error: Error | null, result?: number) => void): void {
        if (b === 0) {
            callback(new Error("Cannot divide by zero"));
            return;
        }
        callback(null, a / b);
    }

    // Method to demonstrate Spies (calls another method)
    addWithLogging(a: number, b: number): number {
        console.log(`Adding ${a} + ${b}`);
        return this.add(a, b);
    }
}
