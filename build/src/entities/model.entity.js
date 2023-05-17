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
const typeorm_1 = require("typeorm");
class Model extends typeorm_1.BaseEntity {
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Model.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Model.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Model.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Model.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Model.prototype, "deleted_at", void 0);
exports.default = Model;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0aWVzL21vZGVsLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQU1pQjtBQUVqQixNQUE4QixLQUFNLFNBQVEsb0JBQVU7Q0FlckQ7QUFiQztJQURDLElBQUEsZ0NBQXNCLEVBQUMsTUFBTSxDQUFDOztpQ0FDcEI7QUFHWDtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ1AsSUFBSTt5Q0FBQztBQUdqQjtJQURDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ1AsSUFBSTt5Q0FBQztBQUdqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7c0NBQ1Y7QUFHakI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNQLElBQUk7eUNBQUM7QUFkbkIsd0JBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJhc2VFbnRpdHksXHJcbiAgQ29sdW1uLFxyXG4gIENyZWF0ZURhdGVDb2x1bW4sXHJcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcclxuICBVcGRhdGVEYXRlQ29sdW1uLFxyXG59IGZyb20gJ3R5cGVvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTW9kZWwgZXh0ZW5kcyBCYXNlRW50aXR5IHtcclxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigndXVpZCcpXHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgQENyZWF0ZURhdGVDb2x1bW4oKVxyXG4gIGNyZWF0ZWRfYXQ6IERhdGU7XHJcblxyXG4gIEBVcGRhdGVEYXRlQ29sdW1uKClcclxuICB1cGRhdGVkX2F0OiBEYXRlO1xyXG5cclxuICBAQ29sdW1uKHsgZGVmYXVsdDogZmFsc2UgfSlcclxuICBkZWxldGVkOiBib29sZWFuO1xyXG5cclxuICBAVXBkYXRlRGF0ZUNvbHVtbigpXHJcbiAgZGVsZXRlZF9hdDogRGF0ZTtcclxufVxyXG4iXX0=