"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
const cors_1 = __importDefault(require("cors"));
const winston_1 = __importDefault(require("winston"));
const ormconfig_1 = __importDefault(require("./ormconfig"));
const logger = winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.simple(),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: "logs.log" }),
    ],
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/users", user_routes_1.userRouter);
async function startServer() {
    try {
        await (0, typeorm_1.createConnection)(ormconfig_1.default);
        const port = process.env.PORT || 4000;
        app.listen(port, () => {
            logger.info(`Server starting at port ${port}`);
        });
    }
    catch (error) {
        logger.info("Error conecting to server: ", error);
    }
}
startServer();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIscUNBQTJDO0FBQzNDLHNEQUE4QjtBQUM5QixzREFBa0Q7QUFDbEQsZ0RBQXdCO0FBQ3hCLHNEQUE4QjtBQUM5Qiw0REFBaUM7QUFFakMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxZQUFZLENBQUM7SUFDbEMsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQy9CLFVBQVUsRUFBRTtRQUNWLElBQUksaUJBQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1FBQ2hDLElBQUksaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO0tBQ3REO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7QUFFaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsd0JBQVUsQ0FBQyxDQUFDO0FBRTlCLEtBQUssVUFBVSxXQUFXO0lBQ3hCLElBQUk7UUFDRixNQUFNLElBQUEsMEJBQWdCLEVBQUMsbUJBQU0sQ0FBQyxDQUFDO1FBRS9CLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ25EO0FBQ0gsQ0FBQztBQUVELFdBQVcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgdXNlclJvdXRlciB9IGZyb20gXCIuL3JvdXRlcy91c2VyLnJvdXRlc1wiO1xyXG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xyXG5pbXBvcnQgd2luc3RvbiBmcm9tIFwid2luc3RvblwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL29ybWNvbmZpZ1wiO1xyXG5cclxuY29uc3QgbG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xyXG4gIGxldmVsOiBcImluZm9cIixcclxuICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LnNpbXBsZSgpLFxyXG4gIHRyYW5zcG9ydHM6IFtcclxuICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSgpLFxyXG4gICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5GaWxlKHsgZmlsZW5hbWU6IFwibG9ncy5sb2dcIiB9KSxcclxuICBdLFxyXG59KTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuYXBwLnVzZShjb3JzKCkpO1xyXG5cclxuYXBwLnVzZShcIi91c2Vyc1wiLCB1c2VyUm91dGVyKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2VydmVyKCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKGNvbmZpZyk7XHJcblxyXG4gICAgY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwMDtcclxuICAgIGFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gICAgICBsb2dnZXIuaW5mbyhgU2VydmVyIHN0YXJ0aW5nIGF0IHBvcnQgJHtwb3J0fWApO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5pbmZvKFwiRXJyb3IgY29uZWN0aW5nIHRvIHNlcnZlcjogXCIsIGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbnN0YXJ0U2VydmVyKCk7XHJcbiJdfQ==