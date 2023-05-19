import User from "../entities/User";
import { validate } from "class-validator";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapUserValidationData(reqBody: any): User {
  const user = new User();
  user.role = reqBody.role;
  user.name = reqBody.name;
  user.lastName = reqBody.lastName;
  user.email = reqBody.email;
  user.password = reqBody.password;
  user.zip = reqBody.zip;
  user.neighborhood = reqBody.neighborhood;
  user.street = reqBody.street;
  user.streetNumber = reqBody.streetNumber;
  user.streetComplement = reqBody.streetComplement;
  user.city = reqBody.city;
  user.state = reqBody.state;

  return user;
}

export async function validateUser(user: User): Promise<string[]> {
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

export function createNewUserFromValidation(userValidation: User): User {
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
