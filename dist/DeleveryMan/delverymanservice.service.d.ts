import { Repository } from 'typeorm';
import { DeleveryManEntity } from './deleverymanentity.entity';
import { DeleveryManFormUpdate } from './deleverymanformupdate.dto';
import { MailerService } from '@nestjs-modules/mailer/dist';
import { ProductForm } from './productform.dto';
import { ProductEntity } from "./productentity.entity";
export declare class DeleveryManService {
    private deleverymanrepo;
    private mailerService;
    private productrepo;
    constructor(deleverymanrepo: Repository<DeleveryManEntity>, mailerService: MailerService, productrepo: Repository<ProductEntity>);
    index(): any;
    signupdeleveryman(deleverymanform: any): Promise<"Deleveryman exist" | "Deleveryman added Successfull">;
    signin(Username: string): Promise<DeleveryManEntity | null>;
    updateProfileById(mydto: DeleveryManFormUpdate, id: any): Promise<import("typeorm").UpdateResult>;
    getProfile(id: any): any;
    getProfileByIDName(qry: any): any;
    updateProfile(password: any, Username: any): Promise<import("typeorm").UpdateResult>;
    deleteProfile(id: any): any;
    sendMail(mydata: any): Promise<any>;
    ProductInsert(mydto: ProductForm): any;
    viewAllProduct(): any;
}
