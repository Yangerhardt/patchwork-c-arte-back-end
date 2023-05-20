import { UpdateOptions } from "sequelize";
import User from "../entities/User";

export class UserRepository {
  async findAllUsers(): Promise<User[]> {
    return User.findAll();
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return User.findOne({ where: { email } });
  }

  async findUserById(id: string): Promise<User | null> {
    return User.findByPk(id);
  }

  async createUser(user: Partial<User>): Promise<User> {
    return User.create(user);
  }

  async updateUser(
    id: string,
    updatedUser: Partial<User>,
    options?: UpdateOptions<User>
  ): Promise<User | null> {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    return user.update(updatedUser, options);
  }

  async deleteUser(id: string): Promise<User | null> {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    user.deleted = true;
    user.deleted_at = new Date();
    return user.save();
  }
}
