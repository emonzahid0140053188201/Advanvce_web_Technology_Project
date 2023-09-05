import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleveryManEntity} from './deleverymanentity.entity';
import * as bcrypt from 'bcrypt';
import { DeleveryManFormUpdate } from './deleverymanformupdate.dto';
import {MailerService} from '@nestjs-modules/mailer/dist';
import { ProductForm} from './productform.dto';
import { ProductEntity } from "./productentity.entity";


@Injectable()
export class DeleveryManService {

    constructor(
        @InjectRepository(DeleveryManEntity)
        private deleverymanrepo: Repository<DeleveryManEntity>,
        private mailerService: MailerService,

        @InjectRepository(ProductEntity)
        private productrepo: Repository<ProductEntity>
      ) {}

      index(): any { 
        return this.deleverymanrepo.find(); 

}
async signupdeleveryman(deleverymanform: any) {
    const Deleveryman = await this.deleverymanrepo.findOne({ where: { Username: deleverymanform.Username } });

    if (Deleveryman) {
      
      return 'Deleveryman exist';
    } else {

      const newDeleveryman = new DeleveryManEntity();
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

    async signin(Username: string): Promise<DeleveryManEntity | null> {
        return this.deleverymanrepo.findOne({ where: { Username } });
      }

  
async updateProfileById(mydto:DeleveryManFormUpdate,id){
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(mydto.password, salt);
        mydto.password = hashPassword;
        return this.deleverymanrepo.update(id,mydto);
    }

getProfile(id):any {
    
            return this.deleverymanrepo.findOneBy({ id });
            
        }

getProfileByIDName(qry):any {
            return this.deleverymanrepo.findOneBy({ id:qry.id, Username:qry.Username });
        }


        async updateProfile(password,Username){
            const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(password, salt);
        password= hassedpassed;
                return this.deleverymanrepo.update({Username:Username},{password:password});
                }

deleteProfile(id):any {
    
    return this.deleverymanrepo.delete(id);
         }


        async sendMail(mydata){
            return   await this.mailerService.sendMail({
                   to: "zahidhasanaiubedu@gmail.com",
                   subject: "xyz",
                   text: "xyz", 
                 });
                }         


ProductInsert(mydto:ProductForm):any {
    
        const produ = new ProductEntity()
                
                produ.Name = mydto.Name;
                produ.Price = mydto.Price;
                produ.Market_Cap = mydto.Market_Cap;
                produ.Volume = mydto.Volume;
                
               
               return this.productrepo.save(produ);
            }
            
viewAllProduct(): any { 
        return this.productrepo.find(); 
            
            }
}
