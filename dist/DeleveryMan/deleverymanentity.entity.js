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
var DeleveryManEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleveryManEntity = void 0;
const typeorm_1 = require("typeorm");
const productentity_entity_1 = require("./productentity.entity");
let DeleveryManEntity = exports.DeleveryManEntity = DeleveryManEntity_1 = class DeleveryManEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DeleveryManEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DeleveryManEntity.prototype, "Firstname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DeleveryManEntity.prototype, "Lastname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DeleveryManEntity.prototype, "Username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DeleveryManEntity.prototype, "Email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DeleveryManEntity.prototype, "Mobile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DeleveryManEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DeleveryManEntity_1, (Delevery) => Delevery.Products),
    __metadata("design:type", productentity_entity_1.ProductEntity)
], DeleveryManEntity.prototype, "Products", void 0);
exports.DeleveryManEntity = DeleveryManEntity = DeleveryManEntity_1 = __decorate([
    (0, typeorm_1.Entity)("Delevery")
], DeleveryManEntity);
//# sourceMappingURL=deleverymanentity.entity.js.map