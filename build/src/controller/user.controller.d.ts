import { Request, Response } from "express";
import { UserService } from "../service/user.serivce";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(req: Request, res: Response): Promise<Response>;
    getUsers(req: Request, res: Response): Promise<Response>;
    getUserById(req: Request, res: Response): Promise<Response>;
    updateUser(req: Request, res: Response): Promise<Response>;
    deleteUser(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=user.controller.d.ts.map