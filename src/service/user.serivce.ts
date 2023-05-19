import User from "../entities/User";
import { UserRepository } from "../repository/user.repository";

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

  async createUser(user: User): Promise<User> {
    try {
      return await this.userRepository.createUser(user);
    } catch (error) {
      console.log("Error creating a new user");
      throw new Error("Error creating a new user.");
    }
  }

  async updateUser(id: string, user: Partial<User>): Promise<User | undefined> {
    try {
      return await this.userRepository.updateUser(id, user);
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
