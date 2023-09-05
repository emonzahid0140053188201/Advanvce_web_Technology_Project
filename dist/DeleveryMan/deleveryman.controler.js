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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleverymanController = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs-modules/mailer/dist");
const delverymanservice_service_1 = require("./delverymanservice.service");
const common_2 = require("@nestjs/common");
const deleverymanformupdate_dto_1 = require("./deleverymanformupdate.dto");
const productform_dto_1 = require("./productform.dto");
const bcrypt = require("bcrypt");
let DeleverymanController = exports.DeleverymanController = class DeleverymanController {
    constructor(DeleveryManService, MailerService) {
        this.DeleveryManService = DeleveryManService;
        this.MailerService = MailerService;
    }
    async signupdeleveryman(DeleveryManForm) {
        const deleveryman = await this.DeleveryManService.signupdeleveryman(DeleveryManForm);
        if (deleveryman === "Deleveryman exist") {
            return { message: 'Delevery exist' };
        }
        else if (deleveryman === "Deleveryman added Successfull") {
            return { message: 'Success' };
        }
    }
    async signin(signinData) {
        const deleveryman = await this.DeleveryManService.signin(signinData.Username);
        if (!deleveryman) {
            return { message: 'Deleveryman not found' };
        }
        const isPasswordValid = await bcrypt.compare(signinData.password, deleveryman.Username);
        if (isPasswordValid) {
            return { message: 'Login successful' };
        }
        else {
            throw new Error('Invalid name or password');
        }
    }
    getProfile(id) {
        return this.DeleveryManService.getProfile(id);
    }
    getProfileByIDName(qry) {
        return this.DeleveryManService.getProfileByIDName(qry);
    }
    updateProfile(session, password) {
        console.log(session.Username);
        return this.DeleveryManService.updateProfile(password, session.Username);
    }
    updateProfileById(mydto, id) {
        return this.DeleveryManService.updateProfileById(mydto, id);
    }
    deleteProfile(id) {
        return this.DeleveryManService.deleteProfile(id);
    }
    signout(session) {
        if (session.destroy()) {
            return { message: "you are logged out" };
        }
        else {
            throw new common_2.UnauthorizedException("invalid actions");
        }
    }
    sendMail(mydata) {
        return this.DeleveryManService.sendMail(mydata);
    }
    ProductInsert(mydto) {
        return this.DeleveryManService.ProductInsert(mydto);
    }
    getProduct() {
        return this.DeleveryManService.viewAllProduct();
    }
};
__decorate([
    (0, common_1.Post)('/registration'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeleverymanController.prototype, "signupdeleveryman", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeleverymanController.prototype, "signin", null);
__decorate([
    (0, common_1.Get)("/viewProfile/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], DeleverymanController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)("/viewProfile"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], DeleverymanController.prototype, "getProfileByIDName", null);
__decorate([
    (0, common_1.Put)('/updateDeleveryman/'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Object)
], DeleverymanController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Put)('/updateProfile/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleverymanformupdate_dto_1.DeleveryManFormUpdate, Number]),
    __metadata("design:returntype", Object)
], DeleverymanController.prototype, "updateProfileById", null);
__decorate([
    (0, common_1.Delete)("/deleteadeleveryman/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], DeleverymanController.prototype, "deleteProfile", null);
__decorate([
    (0, common_1.Get)('/signout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeleverymanController.prototype, "signout", null);
__decorate([
    (0, common_1.Post)('/sendemail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeleverymanController.prototype, "sendMail", null);
__decorate([
    (0, common_1.Post)("/insertProduct"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productform_dto_1.ProductForm]),
    __metadata("design:returntype", Object)
], DeleverymanController.prototype, "ProductInsert", null);
__decorate([
    (0, common_1.Get)("/viewAllProduct"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DeleverymanController.prototype, "getProduct", null);
exports.DeleverymanController = DeleverymanController = __decorate([
    (0, common_1.Controller)("/Deleveryman"),
    __metadata("design:paramtypes", [delverymanservice_service_1.DeleveryManService, dist_1.MailerService])
], DeleverymanController);
//# sourceMappingURL=deleveryman.controler.js.map