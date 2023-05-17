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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const User_1 = require("./User");
var categoryType;
(function (categoryType) {
    categoryType["TOWEL"] = "Toalha";
    categoryType["PURSE"] = "Bolsa";
    categoryType["COVER"] = "Capa";
    categoryType["AMERICAN_GAME"] = "Jogo Americano";
    categoryType["MASK"] = "M\u00E1scara";
})(categoryType || (categoryType = {}));
let Product = class Product extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "available", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: categoryType }),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => User_1.User, (user) => user.products),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Product.prototype, "users", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
exports.Product = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy9Qcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFpRTtBQUNqRSxrRUFBbUM7QUFDbkMsaUNBQThCO0FBRTlCLElBQUssWUFNSjtBQU5ELFdBQUssWUFBWTtJQUNmLGdDQUFnQixDQUFBO0lBQ2hCLCtCQUFlLENBQUE7SUFDZiw4QkFBYyxDQUFBO0lBQ2QsZ0RBQWdDLENBQUE7SUFDaEMscUNBQWdCLENBQUE7QUFDbEIsQ0FBQyxFQU5JLFlBQVksS0FBWixZQUFZLFFBTWhCO0FBR0QsSUFBYSxPQUFPLEdBQXBCLE1BQWEsT0FBUSxTQUFRLHNCQUFLO0NBa0NqQyxDQUFBO0FBaENDO0lBREMsSUFBQSxnQkFBTSxHQUFFOztxQ0FDSTtBQUdiO0lBREMsSUFBQSxnQkFBTSxHQUFFOztzQ0FDSztBQUdkO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDUDtBQUduQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDOzt5Q0FDdEI7QUFHdkI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3NDQUNLO0FBR2Q7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3VDQUNNO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3VDQUNNO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3NDQUNLO0FBR2Q7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3lDQUNRO0FBR2pCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzs0Q0FDVztBQUlwQjtJQUZDLElBQUEsb0JBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxXQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDL0MsSUFBQSxvQkFBVSxHQUFFOztzQ0FDQztBQWpDSCxPQUFPO0lBRG5CLElBQUEsZ0JBQU0sR0FBRTtHQUNJLE9BQU8sQ0FrQ25CO0FBbENZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIEpvaW5Db2x1bW4sIE1hbnlUb01hbnkgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbW9kZWwuZW50aXR5XCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcblxyXG5lbnVtIGNhdGVnb3J5VHlwZSB7XHJcbiAgVE9XRUwgPSBcIlRvYWxoYVwiLFxyXG4gIFBVUlNFID0gXCJCb2xzYVwiLFxyXG4gIENPVkVSID0gXCJDYXBhXCIsXHJcbiAgQU1FUklDQU5fR0FNRSA9IFwiSm9nbyBBbWVyaWNhbm9cIixcclxuICBNQVNLID0gXCJNw6FzY2FyYVwiLFxyXG59XHJcblxyXG5ARW50aXR5KClcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgQENvbHVtbigpXHJcbiAgbmFtZTogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKClcclxuICBwcmljZTogbnVtYmVyO1xyXG5cclxuICBAQ29sdW1uKHsgZGVmYXVsdDogdHJ1ZSB9KVxyXG4gIGF2YWlsYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgQENvbHVtbih7IHR5cGU6IFwiZW51bVwiLCBlbnVtOiBjYXRlZ29yeVR5cGUgfSlcclxuICBjYXRlZ29yeTogY2F0ZWdvcnlUeXBlO1xyXG5cclxuICBAQ29sdW1uKClcclxuICBpbWFnZTogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKClcclxuICB3ZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIHdpZHRoOiBudW1iZXI7XHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIG1hdGVyaWFsOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblxyXG4gIEBNYW55VG9NYW55KCgpID0+IFVzZXIsICh1c2VyKSA9PiB1c2VyLnByb2R1Y3RzKVxyXG4gIEBKb2luQ29sdW1uKClcclxuICB1c2VyczogVXNlcltdO1xyXG59XHJcbiJdfQ==