"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAllUsers() {
        try {
            return await this.userRepository.findAllUsers();
        }
        catch (error) {
            console.log("Error finding users.");
            throw new Error("Error finding users.");
        }
    }
    async findUserById(id) {
        try {
            return await this.userRepository.findUserById(id);
        }
        catch (error) {
            console.log("Error finding user with id: " + id);
            throw new Error("Error finding user ID.");
        }
    }
    async createUser(user) {
        try {
            return await this.userRepository.createUser(user);
        }
        catch (error) {
            console.log("Error creating a new user");
            throw new Error("Error creating a new user.");
        }
    }
    async updateUser(id, user) {
        try {
            return await this.userRepository.updateUser(id, user);
        }
        catch (error) {
            console.log("Error updating user");
            throw new Error("Error updating user.");
        }
    }
    async softDeleteUser(id) {
        try {
            return await this.userRepository.deleteUser(id);
        }
        catch (error) {
            console.log("Error to delete user with id: " + id);
            throw new Error("Error to delete user.");
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJpdmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZpY2UvdXNlci5zZXJpdmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsV0FBVztJQUd0QixZQUFZLGNBQThCO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWTtRQUNoQixJQUFJO1lBQ0YsT0FBTyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDakQ7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFVO1FBQzNCLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbkQ7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBVTtRQUN6QixJQUFJO1lBQ0YsT0FBTyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25EO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDekMsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBVSxFQUFFLElBQW1CO1FBQzlDLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBVTtRQUM3QixJQUFJO1lBQ0YsT0FBTyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7Q0FDRjtBQW5ERCxrQ0FtREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL2VudGl0aWVzL1VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vcmVwb3NpdG9yeS91c2VyLnJlcG9zaXRvcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB1c2VyUmVwb3NpdG9yeTogVXNlclJlcG9zaXRvcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHVzZXJSZXBvc2l0b3J5OiBVc2VyUmVwb3NpdG9yeSkge1xyXG4gICAgdGhpcy51c2VyUmVwb3NpdG9yeSA9IHVzZXJSZXBvc2l0b3J5O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmluZEFsbFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kQWxsVXNlcnMoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmluZGluZyB1c2Vycy5cIik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGZpbmRpbmcgdXNlcnMuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmluZFVzZXJCeUlkKGlkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXIgfCB1bmRlZmluZWQ+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRVc2VyQnlJZChpZCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZpbmRpbmcgdXNlciB3aXRoIGlkOiBcIiArIGlkKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgZmluZGluZyB1c2VyIElELlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZVVzZXIodXNlcjogVXNlcik6IFByb21pc2U8VXNlcj4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuY3JlYXRlVXNlcih1c2VyKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY3JlYXRpbmcgYSBuZXcgdXNlclwiKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYSBuZXcgdXNlci5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGRhdGVVc2VyKGlkOiBzdHJpbmcsIHVzZXI6IFBhcnRpYWw8VXNlcj4pOiBQcm9taXNlPFVzZXIgfCB1bmRlZmluZWQ+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LnVwZGF0ZVVzZXIoaWQsIHVzZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB1cGRhdGluZyB1c2VyXCIpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciB1cGRhdGluZyB1c2VyLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHNvZnREZWxldGVVc2VyKGlkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXIgfCB1bmRlZmluZWQ+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmRlbGV0ZVVzZXIoaWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB0byBkZWxldGUgdXNlciB3aXRoIGlkOiBcIiArIGlkKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgdG8gZGVsZXRlIHVzZXIuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=