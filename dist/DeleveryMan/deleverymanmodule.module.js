"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleveryManModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const deleveryman_controler_1 = require("./deleveryman.controler");
const delverymanservice_service_1 = require("./delverymanservice.service");
const deleverymanentity_entity_1 = require("./deleverymanentity.entity");
const mailer_1 = require("@nestjs-modules/mailer");
const productentity_entity_1 = require("./productentity.entity");
let DeleveryManModule = exports.DeleveryManModule = class DeleveryManModule {
};
exports.DeleveryManModule = DeleveryManModule = __decorate([
    (0, common_1.Module)({
        imports: [mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'zahidhasanaiubedu@gmail.com',
                        pass: 'vqlzpdlcjcoozsza'
                    },
                }
            }), typeorm_1.TypeOrmModule.forFeature([deleverymanentity_entity_1.DeleveryManEntity, productentity_entity_1.ProductEntity])],
        controllers: [deleveryman_controler_1.DeleverymanController],
        providers: [delverymanservice_service_1.DeleveryManService],
    })
], DeleveryManModule);
//# sourceMappingURL=deleverymanmodule.module.js.map