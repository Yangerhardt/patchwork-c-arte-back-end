import Model from "./model.entity";
import { Product } from "./Product";
export declare enum userRole {
    USER = "user",
    ADMIN = "admin",
    GUEST = "guest"
}
export declare class User extends Model {
    role: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    zip: string;
    neighborhood: string;
    street: string;
    streetNumber: string;
    streetComplement: string;
    city: string;
    state: string;
    products: Product[];
    hashPassword(): Promise<void>;
    static comparePasswords(userPassword: string, hashedPassword: string): Promise<any>;
    static createVerificationCode(): {
        verificationCode: string;
        hashedVerificationCode: string;
    };
    toJSON(): this & {
        password: any;
        verified: any;
        verificationCode: any;
    };
}
//# sourceMappingURL=User.d.ts.map