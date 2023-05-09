import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from './user.entity';

export class UserController {
  async getAllUsers(req: Request, res: Response) {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const userId = req.params.id;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(user);
  }

  async createUser(req: Request, res: Response) {
    const userData = req.body;
    const userRepository = getRepository(User);
    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);
    res.json(newUser);
  }

  async updateUser(req: Request, res: Response) {
    const userId = req.params.id;
    const updatedUserData = req.body;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    userRepository.merge(user, updatedUserData);
    await userRepository.save(user);
    res.json(user);
  }

  async deleteUser(req: Request, res: Response) {
    const userId = req.params.id;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    await userRepository.remove(user);
    res.json({ message: 'Usuário excluído com sucesso' });
  }
}
