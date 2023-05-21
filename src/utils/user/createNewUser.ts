import User from "../../entities/User";
import { validate } from "class-validator";
import { UserDTO } from "../../entities/dto/UserDTO";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapUserValidationData(reqBody: any): User {
  try {
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
  } catch (err) {
    console.error(
      "There was an error creating a new user. Check if the body type data is correct"
    );
    throw err;
  }
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

const mapUserToUserDTO = (user: User): UserDTO => {
  const {
    id,
    name,
    role,
    lastName,
    email,
    zip,
    neighborhood,
    street,
    streetNumber,
    streetComplement,
    city,
    state,
  } = user;
  const userDTO = new UserDTO();
  Object.assign(userDTO, {
    id,
    name,
    role,
    lastName,
    email,
    zip,
    neighborhood,
    street,
    streetNumber,
    streetComplement,
    city,
    state,
  });
  return userDTO;
};

export const userToUserDTO = (user: User): UserDTO => {
  return mapUserToUserDTO(user);
};

export const usersToUserDTOs = (users: User[]): UserDTO[] => {
  return users.map((user) => mapUserToUserDTO(user));
};
