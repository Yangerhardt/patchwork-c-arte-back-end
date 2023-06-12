import User from "../entities/User";
import { UserRepository } from "../repository/user.repository";

const passwordError = "isStrongPassword";
const zipNumericError = "isNumeric";
const zipLengthError = "len";

export class UserService {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async findAllUsers(): Promise<User[]> {
    try {
      return await this.userRepository.findAllUsers();
    } catch (error) {
      console.log("Error finding users.");
      throw new Error("Error finding users.");
    }
  }

  async findUserById(id: string): Promise<User | undefined> {
    try {
      return await this.userRepository.findUserById(id);
    } catch (error) {
      console.log("Error finding user with id: " + id);
      throw new Error("Error finding user ID.");
    }
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    try {
      return await this.userRepository.findUserByEmail(email);
    } catch (error) {
      console.log("Error finding user with email: " + email);
      throw new Error("Error finding user Email.");
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      return await this.userRepository.createUser(user.dataValues);
    } catch (error) {
      console.log(error?.errors[0]);
      if (error?.errors[0]?.validatorName == passwordError) {
        throw new Error("Password format incorrect");
      }
      if (error?.errors[0]?.validatorName == zipNumericError) {
        throw new Error("Zip accept only numeric values");
      }
      if (error?.errors[0]?.validatorName == zipLengthError) {
        throw new Error("Zip must be 8 characters");
      }
      throw new Error(error);
    }
  }

  async updateUser(id: string, user: Partial<User>): Promise<User | undefined> {
    try {
      return await this.userRepository.updateUser(id, user.dataValues);
    } catch (error) {
      console.log("Error updating user");
      throw new Error("Error updating user.");
    }
  }

  async softDeleteUser(id: string): Promise<User | undefined> {
    try {
      return await this.userRepository.deleteUser(id);
    } catch (error) {
      console.log("Error to delete user with id: " + id);
      throw new Error("Error to delete user.");
    }
  }
}
