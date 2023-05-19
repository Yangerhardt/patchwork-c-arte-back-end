"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const user_repository_1 = require("../repository/user.repository");
const user_serivce_1 = require("../service/user.serivce");
const typeorm_1 = require("typeorm");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
const createUserController = () => {
    const userRepository = (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository);
    const userService = new user_serivce_1.UserService(userRepository);
    return new user_controller_1.UserController(userService);
};
userRouter.get("/", (req, res) => {
    const userController = createUserController();
    userController.getUsers(req, res);
});
userRouter.get("/:id", (req, res) => {
    const userController = createUserController();
    userController.getUserById(req, res);
});
userRouter.post("/", (req, res) => {
    const userController = createUserController();
    userController.createUser(req, res);
});
userRouter.put("/:id", (req, res) => {
    const userController = createUserController();
    userController.updateUser(req, res);
});
userRouter.delete("/:id", (req, res) => {
    const userController = createUserController();
    userController.deleteUser(req, res);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3VzZXIucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCxtRUFBK0Q7QUFDL0QsbUVBQStEO0FBQy9ELDBEQUFzRDtBQUN0RCxxQ0FBOEM7QUFFOUMsTUFBTSxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQWlDM0IsZ0NBQVU7QUEvQm5CLE1BQU0sb0JBQW9CLEdBQUcsR0FBRyxFQUFFO0lBQ2hDLE1BQU0sY0FBYyxHQUFHLElBQUEsNkJBQW1CLEVBQUMsZ0NBQWMsQ0FBQyxDQUFDO0lBQzNELE1BQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRCxPQUFPLElBQUksZ0NBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFFRixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNsRCxNQUFNLGNBQWMsR0FBRyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDckQsTUFBTSxjQUFjLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ25ELE1BQU0sY0FBYyxHQUFHLG9CQUFvQixFQUFFLENBQUM7SUFDOUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNyRCxNQUFNLGNBQWMsR0FBRyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDeEQsTUFBTSxjQUFjLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzLCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlci91c2VyLmNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vcmVwb3NpdG9yeS91c2VyLnJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS91c2VyLnNlcml2Y2VcIjtcclxuaW1wb3J0IHsgZ2V0Q3VzdG9tUmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcblxyXG5jb25zdCB1c2VyUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbmNvbnN0IGNyZWF0ZVVzZXJDb250cm9sbGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJSZXBvc2l0b3J5ID0gZ2V0Q3VzdG9tUmVwb3NpdG9yeShVc2VyUmVwb3NpdG9yeSk7XHJcbiAgY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UodXNlclJlcG9zaXRvcnkpO1xyXG4gIHJldHVybiBuZXcgVXNlckNvbnRyb2xsZXIodXNlclNlcnZpY2UpO1xyXG59O1xyXG5cclxudXNlclJvdXRlci5nZXQoXCIvXCIsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCB1c2VyQ29udHJvbGxlciA9IGNyZWF0ZVVzZXJDb250cm9sbGVyKCk7XHJcbiAgdXNlckNvbnRyb2xsZXIuZ2V0VXNlcnMocmVxLCByZXMpO1xyXG59KTtcclxuXHJcbnVzZXJSb3V0ZXIuZ2V0KFwiLzppZFwiLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc3QgdXNlckNvbnRyb2xsZXIgPSBjcmVhdGVVc2VyQ29udHJvbGxlcigpO1xyXG4gIHVzZXJDb250cm9sbGVyLmdldFVzZXJCeUlkKHJlcSwgcmVzKTtcclxufSk7XHJcblxyXG51c2VyUm91dGVyLnBvc3QoXCIvXCIsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCB1c2VyQ29udHJvbGxlciA9IGNyZWF0ZVVzZXJDb250cm9sbGVyKCk7XHJcbiAgdXNlckNvbnRyb2xsZXIuY3JlYXRlVXNlcihyZXEsIHJlcyk7XHJcbn0pO1xyXG5cclxudXNlclJvdXRlci5wdXQoXCIvOmlkXCIsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCB1c2VyQ29udHJvbGxlciA9IGNyZWF0ZVVzZXJDb250cm9sbGVyKCk7XHJcbiAgdXNlckNvbnRyb2xsZXIudXBkYXRlVXNlcihyZXEsIHJlcyk7XHJcbn0pO1xyXG5cclxudXNlclJvdXRlci5kZWxldGUoXCIvOmlkXCIsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCB1c2VyQ29udHJvbGxlciA9IGNyZWF0ZVVzZXJDb250cm9sbGVyKCk7XHJcbiAgdXNlckNvbnRyb2xsZXIuZGVsZXRlVXNlcihyZXEsIHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgdXNlclJvdXRlciB9O1xyXG4iXX0=