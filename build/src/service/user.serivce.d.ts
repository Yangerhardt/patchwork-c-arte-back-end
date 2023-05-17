import { User } from "../entities/User";
import { UserRepository } from "../repository/user.repository";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findAllUsers(): Promise<User[]>;
    findUserById(id: string): Promise<User | undefined>;
    createUser(user: User): Promise<User>;
    updateUser(id: string, user: Partial<User>): Promise<User | undefined>;
    softDeleteUser(id: string): Promise<User | undefined>;
}
//# sourceMappingURL=user.serivce.d.ts.map