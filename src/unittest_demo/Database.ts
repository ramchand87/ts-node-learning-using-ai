export class Database {
    async getUser(id: number): Promise<{ id: number; name: string } | null> {
        // Simulate a real database call
        console.log("Connecting to real database...");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id, name: "Real User from DB" });
            }, 500);
        });
    }

    async saveUser(user: { id: number; name: string }): Promise<boolean> {
        console.log("Saving to real database...");
        return true;
    }
}
