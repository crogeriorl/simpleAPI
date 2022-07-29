import { hash } from "bcryptjs";
export class passwordHash {
    async hash(password: string) {
        return hash(password, 8);
    }
}
