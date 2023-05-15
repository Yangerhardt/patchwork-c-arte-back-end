import {
  Entity,
  Column,
  Index,
  BeforeInsert,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import Model from "./model.entity";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { Product } from "./Product";

export enum userRole {
  USER = "user",
  ADMIN = "admin",
  GUEST = "guest",
}

@Entity("users")
export class User extends Model {
  @Column()
  role: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Index("email_index")
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ length: 8 })
  zip: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column()
  streetNumber: string;

  @Column()
  streetComplement: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  state: string;

  @ManyToMany(() => Product, (product) => product.users)
  @JoinColumn()
  products: Product[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }

  static async comparePasswords(userPassword: string, hashedPassword: string) {
    return await bcrypt.compare(userPassword, hashedPassword);
  }

  static createVerificationCode() {
    const verificationCode = crypto.randomBytes(32).toString("hex");

    const hashedVerificationCode = crypto
      .createHash("sha256")
      .update(verificationCode)
      .digest("hex");

    return { verificationCode, hashedVerificationCode };
  }

  toJSON() {
    return {
      ...this,
      password: undefined,
      verified: undefined,
      verificationCode: undefined,
    };
  }
}
