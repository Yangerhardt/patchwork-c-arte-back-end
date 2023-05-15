import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findAllUsers(): Promise<User[]> {
    return this.find();
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.findOne({ where: { email } });
  }

  async findUserById(id: string): Promise<User | undefined> {
    return this.findOne({ where: { id } });
  }

  async createUser(user: User): Promise<User> {
    return this.save(user);
  }

  async updateUser(
    id: string,
    updatedUser: Partial<User>
  ): Promise<User | undefined> {
    const user = await this.findOne({ where: { id } });

    if (!user) {
      throw new Error(`User with ${id} not found`);
    }

    user.updated_at = new Date();
    Object.assign(user, updatedUser);
    return this.save(user);
  }

  async deleteUser(id: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new Error(`User with ${id} not found`);
    }
    user.deleted = true;
    user.deleted_at = new Date();
    return this.save(user);
  }
}
