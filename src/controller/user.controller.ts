import { Request, Response } from "express";
import { validate } from "class-validator";
import { UserService } from "../service/user.serivce";
import {
  mapUserValidationData,
  userToUserDTO,
  usersToUserDTOs,
  validateUser,
} from "../utils/user/createNewUser";
import User from "../entities/User";

export class UserController {
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const userValidation: User = mapUserValidationData(req.body);

      const validationErrors = await validateUser(userValidation);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const createdUser = await this.userService.createUser(userValidation);
      const userDTO = userToUserDTO(createdUser);

      return res.status(201).json(userDTO);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error: " + error });
    }
  }

  async getUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userService.findAllUsers();

      if (!users) {
        return res.status(404).json({ error: "No user in the database" });
      }

      const usersDTO = usersToUserDTOs(users);

      return res.json(usersDTO);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.id;
      const user = await this.userService.findUserById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const userDTO = userToUserDTO(user);
      return res.json(userDTO);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.id;
      const userValidation = mapUserValidationData(req.body);

      const validationErrors = await validate(userValidation);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const updatedUser = await this.userService.updateUser(
        userId,
        userValidation
      );

      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      const userUpdatedDTO = userToUserDTO(updatedUser);
      return res.json(userUpdatedDTO);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.id;

      const deletedUser = await this.userService.softDeleteUser(userId);

      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.json({ message: "User deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
