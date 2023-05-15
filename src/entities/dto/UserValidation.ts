import { IsEnum, IsNotEmpty, IsString, IsEmail, Length } from "class-validator";
import { userRole } from "../User";

export class UserValidation {
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @Length(8)
  zip: string;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  streetNumber: string;

  @IsNotEmpty()
  @IsString()
  streetComplement: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @Length(2)
  state: string;
}
