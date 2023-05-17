"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async findAllUsers() {
        return this.find();
    }
    async findUserByEmail(email) {
        return this.findOne({ where: { email } });
    }
    async findUserById(id) {
        return this.findOne({ where: { id } });
    }
    async createUser(user) {
        return this.save(user);
    }
    async updateUser(id, updatedUser) {
        const user = await this.findOne({ where: { id } });
        if (!user) {
            throw new Error(`User with ${id} not found`);
        }
        user.updated_at = new Date();
        Object.assign(user, updatedUser);
        return this.save(user);
    }
    async deleteUser(id) {
        const user = await this.findOne({ where: { id } });
        if (!user) {
            throw new Error(`User with ${id} not found`);
        }
        user.deleted = true;
        user.deleted_at = new Date();
        return this.save(user);
    }
};
UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(User_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JlcG9zaXRvcnkvdXNlci5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFDQUF1RDtBQUN2RCwyQ0FBd0M7QUFHeEMsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBZSxTQUFRLG9CQUFnQjtJQUNsRCxLQUFLLENBQUMsWUFBWTtRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFhO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFVO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFVO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FDZCxFQUFVLEVBQ1YsV0FBMEI7UUFFMUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBVTtRQUN6QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBQ0YsQ0FBQTtBQXpDWSxjQUFjO0lBRDFCLElBQUEsMEJBQWdCLEVBQUMsV0FBSSxDQUFDO0dBQ1YsY0FBYyxDQXlDMUI7QUF6Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlSZXBvc2l0b3J5LCBSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9lbnRpdGllcy9Vc2VyXCI7XHJcblxyXG5ARW50aXR5UmVwb3NpdG9yeShVc2VyKVxyXG5leHBvcnQgY2xhc3MgVXNlclJlcG9zaXRvcnkgZXh0ZW5kcyBSZXBvc2l0b3J5PFVzZXI+IHtcclxuICBhc3luYyBmaW5kQWxsVXNlcnMoKTogUHJvbWlzZTxVc2VyW10+IHtcclxuICAgIHJldHVybiB0aGlzLmZpbmQoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZpbmRVc2VyQnlFbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxVc2VyIHwgdW5kZWZpbmVkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5maW5kT25lKHsgd2hlcmU6IHsgZW1haWwgfSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZpbmRVc2VyQnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyIHwgdW5kZWZpbmVkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5maW5kT25lKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZVVzZXIodXNlcjogVXNlcik6IFByb21pc2U8VXNlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZSh1c2VyKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHVwZGF0ZVVzZXIoXHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgdXBkYXRlZFVzZXI6IFBhcnRpYWw8VXNlcj5cclxuICApOiBQcm9taXNlPFVzZXIgfCB1bmRlZmluZWQ+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmZpbmRPbmUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVzZXIgd2l0aCAke2lkfSBub3QgZm91bmRgKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VyLnVwZGF0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgT2JqZWN0LmFzc2lnbih1c2VyLCB1cGRhdGVkVXNlcik7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlKHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVsZXRlVXNlcihpZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyIHwgdW5kZWZpbmVkPiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5maW5kT25lKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVzZXIgd2l0aCAke2lkfSBub3QgZm91bmRgKTtcclxuICAgIH1cclxuICAgIHVzZXIuZGVsZXRlZCA9IHRydWU7XHJcbiAgICB1c2VyLmRlbGV0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZSh1c2VyKTtcclxuICB9XHJcbn1cclxuIl19