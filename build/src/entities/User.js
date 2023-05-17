"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.userRole = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const crypto_1 = __importDefault(require("crypto"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Product_1 = require("./Product");
var userRole;
(function (userRole) {
    userRole["USER"] = "user";
    userRole["ADMIN"] = "admin";
    userRole["GUEST"] = "guest";
})(userRole = exports.userRole || (exports.userRole = {}));
let User = class User extends model_entity_1.default {
    async hashPassword() {
        this.password = await bcryptjs_1.default.hash(this.password, 12);
    }
    static async comparePasswords(userPassword, hashedPassword) {
        return await bcryptjs_1.default.compare(userPassword, hashedPassword);
    }
    static createVerificationCode() {
        const verificationCode = crypto_1.default.randomBytes(32).toString("hex");
        const hashedVerificationCode = crypto_1.default
            .createHash("sha256")
            .update(verificationCode)
            .digest("hex");
        return { verificationCode, hashedVerificationCode };
    }
    toJSON() {
        return Object.assign(Object.assign({}, this), { password: undefined, verified: undefined, verificationCode: undefined });
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Index)("email_index"),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 8 }),
    __metadata("design:type", String)
], User.prototype, "zip", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "neighborhood", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "streetNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "streetComplement", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 2 }),
    __metadata("design:type", String)
], User.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Product_1.Product, (product) => product.users),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], User.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    (0, typeorm_1.Entity)("users")
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQU9pQjtBQUNqQixrRUFBbUM7QUFDbkMsb0RBQTRCO0FBQzVCLHdEQUE4QjtBQUM5Qix1Q0FBb0M7QUFFcEMsSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLHlCQUFhLENBQUE7SUFDYiwyQkFBZSxDQUFBO0lBQ2YsMkJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFHRCxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFLLFNBQVEsc0JBQUs7SUEyQ3ZCLEFBQU4sS0FBSyxDQUFDLFlBQVk7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLGtCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBb0IsRUFBRSxjQUFzQjtRQUN4RSxPQUFPLE1BQU0sa0JBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxNQUFNLENBQUMsc0JBQXNCO1FBQzNCLE1BQU0sZ0JBQWdCLEdBQUcsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhFLE1BQU0sc0JBQXNCLEdBQUcsZ0JBQU07YUFDbEMsVUFBVSxDQUFDLFFBQVEsQ0FBQzthQUNwQixNQUFNLENBQUMsZ0JBQWdCLENBQUM7YUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxNQUFNO1FBQ0osdUNBQ0ssSUFBSSxLQUNQLFFBQVEsRUFBRSxTQUFTLEVBQ25CLFFBQVEsRUFBRSxTQUFTLEVBQ25CLGdCQUFnQixFQUFFLFNBQVMsSUFDM0I7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQXBFQztJQURDLElBQUEsZ0JBQU0sR0FBRTs7a0NBQ0k7QUFHYjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7a0NBQ0k7QUFHYjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7c0NBQ1E7QUFJakI7SUFGQyxJQUFBLGVBQUssRUFBQyxhQUFhLENBQUM7SUFDcEIsSUFBQSxnQkFBTSxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzttQ0FDWDtBQUdkO0lBREMsSUFBQSxnQkFBTSxHQUFFOztzQ0FDUTtBQUdqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7aUNBQ1Y7QUFHWjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7MENBQ1k7QUFHckI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O29DQUNNO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzBDQUNZO0FBR3JCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzs4Q0FDZ0I7QUFHekI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O2tDQUNJO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7O21DQUNSO0FBSWQ7SUFGQyxJQUFBLG9CQUFVLEVBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNyRCxJQUFBLG9CQUFVLEdBQUU7O3NDQUNPO0FBR2Q7SUFETCxJQUFBLHNCQUFZLEdBQUU7Ozs7d0NBR2Q7QUE3Q1UsSUFBSTtJQURoQixJQUFBLGdCQUFNLEVBQUMsT0FBTyxDQUFDO0dBQ0gsSUFBSSxDQXNFaEI7QUF0RVksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEVudGl0eSxcclxuICBDb2x1bW4sXHJcbiAgSW5kZXgsXHJcbiAgQmVmb3JlSW5zZXJ0LFxyXG4gIE1hbnlUb01hbnksXHJcbiAgSm9pbkNvbHVtbixcclxufSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbW9kZWwuZW50aXR5XCI7XHJcbmltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vUHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGVudW0gdXNlclJvbGUge1xyXG4gIFVTRVIgPSBcInVzZXJcIixcclxuICBBRE1JTiA9IFwiYWRtaW5cIixcclxuICBHVUVTVCA9IFwiZ3Vlc3RcIixcclxufVxyXG5cclxuQEVudGl0eShcInVzZXJzXCIpXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWwge1xyXG4gIEBDb2x1bW4oKVxyXG4gIHJvbGU6IHN0cmluZztcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgbmFtZTogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKClcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG5cclxuICBASW5kZXgoXCJlbWFpbF9pbmRleFwiKVxyXG4gIEBDb2x1bW4oeyB1bmlxdWU6IHRydWUgfSlcclxuICBlbWFpbDogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKClcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbGVuZ3RoOiA4IH0pXHJcbiAgemlwOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIG5laWdoYm9yaG9vZDogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKClcclxuICBzdHJlZXQ6IHN0cmluZztcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgc3RyZWV0TnVtYmVyOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIHN0cmVldENvbXBsZW1lbnQ6IHN0cmluZztcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgY2l0eTogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbGVuZ3RoOiAyIH0pXHJcbiAgc3RhdGU6IHN0cmluZztcclxuXHJcbiAgQE1hbnlUb01hbnkoKCkgPT4gUHJvZHVjdCwgKHByb2R1Y3QpID0+IHByb2R1Y3QudXNlcnMpXHJcbiAgQEpvaW5Db2x1bW4oKVxyXG4gIHByb2R1Y3RzOiBQcm9kdWN0W107XHJcblxyXG4gIEBCZWZvcmVJbnNlcnQoKVxyXG4gIGFzeW5jIGhhc2hQYXNzd29yZCgpIHtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCAxMik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgY29tcGFyZVBhc3N3b3Jkcyh1c2VyUGFzc3dvcmQ6IHN0cmluZywgaGFzaGVkUGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGF3YWl0IGJjcnlwdC5jb21wYXJlKHVzZXJQYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZVZlcmlmaWNhdGlvbkNvZGUoKSB7XHJcbiAgICBjb25zdCB2ZXJpZmljYXRpb25Db2RlID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDMyKS50b1N0cmluZyhcImhleFwiKTtcclxuXHJcbiAgICBjb25zdCBoYXNoZWRWZXJpZmljYXRpb25Db2RlID0gY3J5cHRvXHJcbiAgICAgIC5jcmVhdGVIYXNoKFwic2hhMjU2XCIpXHJcbiAgICAgIC51cGRhdGUodmVyaWZpY2F0aW9uQ29kZSlcclxuICAgICAgLmRpZ2VzdChcImhleFwiKTtcclxuXHJcbiAgICByZXR1cm4geyB2ZXJpZmljYXRpb25Db2RlLCBoYXNoZWRWZXJpZmljYXRpb25Db2RlIH07XHJcbiAgfVxyXG5cclxuICB0b0pTT04oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi50aGlzLFxyXG4gICAgICBwYXNzd29yZDogdW5kZWZpbmVkLFxyXG4gICAgICB2ZXJpZmllZDogdW5kZWZpbmVkLFxyXG4gICAgICB2ZXJpZmljYXRpb25Db2RlOiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=