import express, { Request, Response } from "express";
import { UserController } from "../controller/user.controller";
import { UserService } from "../service/user.serivce";
import { UserRepository } from "../repository/user.repository";
import { getCustomRepository } from "typeorm";

const userRepository = getCustomRepository(UserRepository);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
  userController.getUsers(req, res);
});

userRouter.get("/:id", (req: Request, res: Response) => {
  userController.getUserById(req, res);
});

userRouter.post("/", (req: Request, res: Response) => {
  userController.createUser(req, res);
});

userRouter.put("/:id", (req: Request, res: Response) => {
  userController.updateUser(req, res);
});

userRouter.delete("/:id", (req: Request, res: Response) => {
  userController.deleteUser(req, res);
});

export { userRouter };
