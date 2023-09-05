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
exports.DeleveryManService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const deleverymanentity_entity_1 = require("./deleverymanentity.entity");
const bcrypt = require("bcrypt");
const dist_1 = require("@nestjs-modules/mailer/dist");
const productentity_entity_1 = require("./productentity.entity");
let DeleveryManService = exports.DeleveryManService = class DeleveryManService {
    constructor(deleverymanrepo, mailerService, productrepo) {
        this.deleverymanrepo = deleverymanrepo;
        this.mailerService = mailerService;
        this.productrepo = productrepo;
    }
    index() {
        return this.deleverymanrepo.find();
    }
    async signupdeleveryman(deleverymanform) {
        const Deleveryman = await this.deleverymanrepo.findOne({ where: { Username: deleverymanform.Username } });
        if (Deleveryman) {
            return 'Deleveryman exist';
        }
        else {
            const newDeleveryman = new deleverymanentity_entity_1.DeleveryManEntity();
            newDeleveryman.Firstname = deleverymanform.Firstname;
            newDeleveryman.Lastname = deleverymanform.Lastname;
            newDeleveryman.Username = deleverymanform.Username;
            newDeleveryman.password = deleverymanform.password;
            newDeleveryman.Email = deleverymanform.Email;
            newDeleveryman.Mobile = deleverymanform.Mobile;
            const hashedPassword = await bcrypt.hash(deleverymanform.password, 10);
            newDeleveryman.password = hashedPassword;
            const savedDeleveryman = await this.deleverymanrepo.save(newDeleveryman);
            return "Deleveryman added Successfull";
        }
    }
    async signin(Username) {
        return this.deleverymanrepo.findOne({ where: { Username } });
    }
    async updateProfileById(mydto, id) {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(mydto.password, salt);
        mydto.password = hashPassword;
        return this.deleverymanrepo.update(id, mydto);
    }
    getProfile(id) {
        return this.deleverymanrepo.findOneBy({ id });
    }
    getProfileByIDName(qry) {
        return this.deleverymanrepo.findOneBy({ id: qry.id, Username: qry.Username });
    }
    async updateProfile(password, Username) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(password, salt);
        password = hassedpassed;
        return this.deleverymanrepo.update({ Username: Username }, { password: password });
    }
    deleteProfile(id) {
        return this.deleverymanrepo.delete(id);
    }
    async sendMail(mydata) {
        return await this.mailerService.sendMail({
            to: "zahidhasanaiubedu@gmail.com",
            subject: "xyz",
            text: "xyz",
        });
    }
    ProductInsert(mydto) {
        const produ = new productentity_entity_1.ProductEntity();
        produ.Name = mydto.Name;
        produ.Price = mydto.Price;
        produ.Market_Cap = mydto.Market_Cap;
        produ.Volume = mydto.Volume;
        return this.productrepo.save(produ);
    }
    viewAllProduct() {
        return this.productrepo.find();
    }
};
exports.DeleveryManService = DeleveryManService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(deleverymanentity_entity_1.DeleveryManEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(productentity_entity_1.ProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        dist_1.MailerService,
        typeorm_2.Repository])
], DeleveryManService);
//# sourceMappingURL=delverymanservice.service.js.map