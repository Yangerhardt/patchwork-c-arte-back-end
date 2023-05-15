import { User } from "../entities/User";
import { UserValidation } from "../entities/dto/UserValidation";
import { validate } from "class-validator";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapUserValidationData(reqBody: any): UserValidation {
  const userValidation = new UserValidation();
  userValidation.role = reqBody.role;
  userValidation.name = reqBody.name;
  userValidation.lastName = reqBody.lastName;
  userValidation.email = reqBody.email;
  userValidation.password = reqBody.password;
  userValidation.zip = reqBody.zip;
  userValidation.neighborhood = reqBody.neighborhood;
  userValidation.street = reqBody.street;
  userValidation.streetNumber = reqBody.streetNumber;
  userValidation.streetComplement = reqBody.streetComplement;
  userValidation.city = reqBody.city;
  userValidation.state = reqBody.state;

  return userValidation;
}

export async function validateUser(user: UserValidation): Promise<string[]> {
  const validationErrors = await validate(user);
  const errors: string[] = [];

  if (validationErrors.length > 0) {
    validationErrors.forEach((error) => {
      Object.values(error.constraints).forEach((constraint) => {
        errors.push(constraint);
      });
    });
  }

  return errors;
}

export function createNewUserFromValidation(
  userValidation: UserValidation
): User {
  const user = new User();
  user.role = userValidation.role;
  user.name = userValidation.name;
  user.lastName = userValidation.lastName;
  user.email = userValidation.email;
  user.password = userValidation.password;
  user.zip = userValidation.zip;
  user.neighborhood = userValidation.neighborhood;
  user.street = userValidation.street;
  user.streetNumber = userValidation.streetNumber;
  user.streetComplement = userValidation.streetComplement;
  user.city = userValidation.city;
  user.state = userValidation.state;
  return user;
}
