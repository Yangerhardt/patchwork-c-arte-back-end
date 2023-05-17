import { Repository } from "typeorm";
import { User } from "../entities/User";
export declare class UserRepository extends Repository<User> {
    findAllUsers(): Promise<User[]>;
    findUserByEmail(email: string): Promise<User | undefined>;
    findUserById(id: string): Promise<User | undefined>;
    createUser(user: User): Promise<User>;
    updateUser(id: string, updatedUser: Partial<User>): Promise<User | undefined>;
    deleteUser(id: string): Promise<User | undefined>;
}
//# sourceMappingURL=user.repository.d.ts.map