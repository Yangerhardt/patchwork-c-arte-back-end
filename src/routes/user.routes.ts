import express, { Request, Response } from "express";
import { UserController } from "../controller/user.controller";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../service/user.serivce";
import { getCustomRepository } from "typeorm";

const userRouter = express.Router();

const createUserController = () => {
  const userRepository = getCustomRepository(UserRepository);
  const userService = new UserService(userRepository);
  return new UserController(userService);
};

userRouter.get("/", (req: Request, res: Response) => {
  const userController = createUserController();
  userController.getUsers(req, res);
});

userRouter.get("/:id", (req: Request, res: Response) => {
  const userController = createUserController();
  userController.getUserById(req, res);
});

userRouter.post("/", (req: Request, res: Response) => {
  const userController = createUserController();
  userController.createUser(req, res);
});

userRouter.put("/:id", (req: Request, res: Response) => {
  const userController = createUserController();
  userController.updateUser(req, res);
});

userRouter.delete("/:id", (req: Request, res: Response) => {
  const userController = createUserController();
  userController.deleteUser(req, res);
});

export { userRouter };
