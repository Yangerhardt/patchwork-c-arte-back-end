import express, { Request, Response } from "express";
import { UserController } from "../controller/user.controller";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../service/user.serivce";

const userRouter = express.Router();

const createUserController = () => {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  return new UserController(userService);
};

userRouter.get("/", async (req: Request, res: Response) => {
  const userController = createUserController();
  await userController.getUsers(req, res);
});

userRouter.get("/:id", async (req: Request, res: Response) => {
  const userController = createUserController();
  await userController.getUserById(req, res);
});

userRouter.post("/", async (req: Request, res: Response) => {
  const userController = createUserController();
  await userController.createUser(req, res);
});

userRouter.put("/:id", async (req: Request, res: Response) => {
  const userController = createUserController();
  await userController.updateUser(req, res);
});

userRouter.delete("/:id", async (req: Request, res: Response) => {
  const userController = createUserController();
  await userController.deleteUser(req, res);
});

export { userRouter };
