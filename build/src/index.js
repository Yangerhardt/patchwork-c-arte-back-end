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
const ormconfig_1 = __importDefault(require("../ormconfig"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIscUNBQTJDO0FBQzNDLHNEQUE4QjtBQUM5QixzREFBa0Q7QUFDbEQsZ0RBQXdCO0FBQ3hCLHNEQUE4QjtBQUM5Qiw2REFBa0M7QUFFbEMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxZQUFZLENBQUM7SUFDbEMsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQy9CLFVBQVUsRUFBRTtRQUNWLElBQUksaUJBQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1FBQ2hDLElBQUksaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO0tBQ3REO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7QUFFaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsd0JBQVUsQ0FBQyxDQUFDO0FBRTlCLEtBQUssVUFBVSxXQUFXO0lBQ3hCLElBQUk7UUFDRixNQUFNLElBQUEsMEJBQWdCLEVBQUMsbUJBQU0sQ0FBQyxDQUFDO1FBRS9CLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ25EO0FBQ0gsQ0FBQztBQUVELFdBQVcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgdXNlclJvdXRlciB9IGZyb20gXCIuL3JvdXRlcy91c2VyLnJvdXRlc1wiO1xyXG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xyXG5pbXBvcnQgd2luc3RvbiBmcm9tIFwid2luc3RvblwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9vcm1jb25maWdcIjtcclxuXHJcbmNvbnN0IGxvZ2dlciA9IHdpbnN0b24uY3JlYXRlTG9nZ2VyKHtcclxuICBsZXZlbDogXCJpbmZvXCIsXHJcbiAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5zaW1wbGUoKSxcclxuICB0cmFuc3BvcnRzOiBbXHJcbiAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoKSxcclxuICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuRmlsZSh7IGZpbGVuYW1lOiBcImxvZ3MubG9nXCIgfSksXHJcbiAgXSxcclxufSk7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcbmFwcC51c2UoY29ycygpKTtcclxuXHJcbmFwcC51c2UoXCIvdXNlcnNcIiwgdXNlclJvdXRlcik7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzdGFydFNlcnZlcigpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY3JlYXRlQ29ubmVjdGlvbihjb25maWcpO1xyXG5cclxuICAgIGNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XHJcbiAgICBhcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICAgICAgbG9nZ2VyLmluZm8oYFNlcnZlciBzdGFydGluZyBhdCBwb3J0ICR7cG9ydH1gKTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuaW5mbyhcIkVycm9yIGNvbmVjdGluZyB0byBzZXJ2ZXI6IFwiLCBlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5zdGFydFNlcnZlcigpO1xyXG4iXX0=