import { getRepository } from 'typeorm';
import { User } from './user.entity';

export class UserService {
  private userRepository = getRepository(User);

  async getAllUsers() {
    return this.userRepository.find();
  }

  async getUserById(id: number) {
    return this.userRepository.findOne(id);
  }

  async createUser(userData: Partial<User>) {
    const newUser = this.userRepository.create(userData);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async updateUser(id: number, updatedUserData: Partial<User>) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    this.userRepository.merge(user, updatedUserData);
    await this.userRepository.save(user);
    return user;
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    await this.userRepository.remove(user);
  }
}
