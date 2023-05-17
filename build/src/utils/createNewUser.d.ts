import { User } from "../entities/User";
import { UserValidation } from "../entities/dto/UserValidation";
export declare function mapUserValidationData(reqBody: any): UserValidation;
export declare function validateUser(user: UserValidation): Promise<string[]>;
export declare function createNewUserFromValidation(userValidation: UserValidation): User;
//# sourceMappingURL=createNewUser.d.ts.map