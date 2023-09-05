import { MailerService } from '@nestjs-modules/mailer/dist';
import { DeleveryManService } from './delverymanservice.service';
import { DeleveryManFormUpdate } from './deleverymanformupdate.dto';
import { ProductForm } from './productform.dto';
export declare class DeleverymanController {
    private DeleveryManService;
    private MailerService;
    constructor(DeleveryManService: DeleveryManService, MailerService: MailerService);
    signupdeleveryman(DeleveryManForm: {
        Firstname: string;
        Lastname: string;
        name: string;
        password: string;
        email: string;
        Mobile: string;
    }): Promise<{
        message: string;
    }>;
    signin(signinData: {
        Username: string;
        password: string;
    }): Promise<{
        message: string;
    }>;
    getProfile(id: number): any;
    getProfileByIDName(qry: any): any;
    updateProfile(session: any, password: string): any;
    updateProfileById(mydto: DeleveryManFormUpdate, id: number): any;
    deleteProfile(id: number): any;
    signout(session: any): {
        message: string;
    };
    sendMail(mydata: any): Promise<any>;
    ProductInsert(mydto: ProductForm): any;
    getProduct(): any;
}
