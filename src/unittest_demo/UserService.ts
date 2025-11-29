import { Database } from './Database';

export class UserService {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    async getUserName(id: number): Promise<string> {
        const user = await this.db.getUser(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user.name.toUpperCase(); // Business logic: convert to uppercase
    }
}
