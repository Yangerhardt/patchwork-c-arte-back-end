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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const class_validator_1 = require("class-validator");
class UserValidation {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserValidation.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserValidation.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserValidation.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserValidation.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserValidation.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(8),
    __metadata("design:type", String)
], UserValidation.prototype, "zip", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserValidation.prototype, "neighborhood", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserValidation.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserValidation.prototype, "streetNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserValidation.prototype, "streetComplement", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserValidation.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2),
    __metadata("design:type", String)
], UserValidation.prototype, "state", void 0);
exports.UserValidation = UserValidation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclZhbGlkYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW50aXRpZXMvZHRvL1VzZXJWYWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF3RTtBQUV4RSxNQUFhLGNBQWM7Q0ErQzFCO0FBN0NDO0lBREMsSUFBQSwwQkFBUSxHQUFFOzs0Q0FDRTtBQUliO0lBRkMsSUFBQSw0QkFBVSxHQUFFO0lBQ1osSUFBQSwwQkFBUSxHQUFFOzs0Q0FDRTtBQUliO0lBRkMsSUFBQSw0QkFBVSxHQUFFO0lBQ1osSUFBQSwwQkFBUSxHQUFFOztnREFDTTtBQUlqQjtJQUZDLElBQUEsNEJBQVUsR0FBRTtJQUNaLElBQUEseUJBQU8sR0FBRTs7NkNBQ0k7QUFJZDtJQUZDLElBQUEsNEJBQVUsR0FBRTtJQUNaLElBQUEsMEJBQVEsR0FBRTs7Z0RBQ007QUFJakI7SUFGQyxJQUFBLDRCQUFVLEdBQUU7SUFDWixJQUFBLHdCQUFNLEVBQUMsQ0FBQyxDQUFDOzsyQ0FDRTtBQUlaO0lBRkMsSUFBQSw0QkFBVSxHQUFFO0lBQ1osSUFBQSwwQkFBUSxHQUFFOztvREFDVTtBQUlyQjtJQUZDLElBQUEsNEJBQVUsR0FBRTtJQUNaLElBQUEsMEJBQVEsR0FBRTs7OENBQ0k7QUFJZjtJQUZDLElBQUEsNEJBQVUsR0FBRTtJQUNaLElBQUEsMEJBQVEsR0FBRTs7b0RBQ1U7QUFJckI7SUFGQyxJQUFBLDRCQUFVLEdBQUU7SUFDWixJQUFBLDBCQUFRLEdBQUU7O3dEQUNjO0FBSXpCO0lBRkMsSUFBQSw0QkFBVSxHQUFFO0lBQ1osSUFBQSwwQkFBUSxHQUFFOzs0Q0FDRTtBQUliO0lBRkMsSUFBQSw0QkFBVSxHQUFFO0lBQ1osSUFBQSx3QkFBTSxFQUFDLENBQUMsQ0FBQzs7NkNBQ0k7QUE5Q2hCLHdDQStDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHksIElzU3RyaW5nLCBJc0VtYWlsLCBMZW5ndGggfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclZhbGlkYXRpb24ge1xyXG4gIEBJc1N0cmluZygpXHJcbiAgcm9sZTogc3RyaW5nO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgQElzU3RyaW5nKClcclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBJc05vdEVtcHR5KClcclxuICBASXNTdHJpbmcoKVxyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBJc05vdEVtcHR5KClcclxuICBASXNFbWFpbCgpXHJcbiAgZW1haWw6IHN0cmluZztcclxuXHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc1N0cmluZygpXHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuXHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBMZW5ndGgoOClcclxuICB6aXA6IHN0cmluZztcclxuXHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc1N0cmluZygpXHJcbiAgbmVpZ2hib3Job29kOiBzdHJpbmc7XHJcblxyXG4gIEBJc05vdEVtcHR5KClcclxuICBASXNTdHJpbmcoKVxyXG4gIHN0cmVldDogc3RyaW5nO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgQElzU3RyaW5nKClcclxuICBzdHJlZXROdW1iZXI6IHN0cmluZztcclxuXHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc1N0cmluZygpXHJcbiAgc3RyZWV0Q29tcGxlbWVudDogc3RyaW5nO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgQElzU3RyaW5nKClcclxuICBjaXR5OiBzdHJpbmc7XHJcblxyXG4gIEBJc05vdEVtcHR5KClcclxuICBATGVuZ3RoKDIpXHJcbiAgc3RhdGU6IHN0cmluZztcclxufVxyXG4iXX0=