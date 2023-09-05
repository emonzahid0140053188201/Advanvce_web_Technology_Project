import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, UploadedFile, UseInterceptors, Session, UseGuards,Res, Query } from "@nestjs/common";
import {MailerService} from '@nestjs-modules/mailer/dist';
import { DeleveryManForm} from './deleverymanform.dto';
import { DeleveryManService } from './delverymanservice.service';
import { UnauthorizedException } from "@nestjs/common";
import { SessionGuard } from './session.gurd';
import { DeleveryManFormUpdate } from './deleverymanformupdate.dto';
import { ProductForm } from './productform.dto';
import * as bcrypt from 'bcrypt';

@Controller("/Deleveryman")
export class DeleverymanController
{ 
  constructor(private DeleveryManService: DeleveryManService, private MailerService: MailerService){}
    
    
    @Post('/registration')
    @UsePipes(new ValidationPipe())
    async signupdeleveryman(
      @Body() DeleveryManForm: {
        Firstname:string;
        Lastname:string;
        name: string;
        password: string;
        email: string;
        Mobile: string;
      
      }
    ) {
      const deleveryman= await this.DeleveryManService.signupdeleveryman(DeleveryManForm);
      if(deleveryman==="Deleveryman exist"){
        return { message: 'Delevery exist' };
      }else if(deleveryman==="Deleveryman added Successfull"){
        return { message: 'Success'};
      }
    }


    @Post('signin')
    async signin(@Body() signinData: { Username: string; password: string }) {
      const deleveryman = await this.DeleveryManService.signin(signinData.Username);
  
      if (!deleveryman) {
        return { message: 'Deleveryman not found' }; 
      }
  
      const isPasswordValid = await bcrypt.compare(signinData.password,deleveryman.Username);
  
      if (isPasswordValid) {
        return { message: 'Login successful' };
      } else {
        throw new Error('Invalid name or password');
      }
    }
  
@Get("/viewProfile/:id")
getProfile(@Param("id", ParseIntPipe) id:number,): any {
  return this.DeleveryManService.getProfile(id);
}

@Get("/viewProfile")
getProfileByIDName(@Query() qry: any): any {
  return this.DeleveryManService.getProfileByIDName(qry);
}

@Put('/updateDeleveryman/')
//@UseGuards(SessionGuard)
@UsePipes(new ValidationPipe())
updateProfile(@Session() session,@Body('password') password: string): any {
  console.log(session.Username);
  return this.DeleveryManService.updateProfile(password,session.Username);
}

@Put('/updateProfile/:id')
@UsePipes(new ValidationPipe())
updateProfileById(
  @Body() mydto: DeleveryManFormUpdate,
  @Param('id', ParseIntPipe) id: number,
): any {
  return this.DeleveryManService.updateProfileById(mydto, id);
}


    

@Delete("/deleteadeleveryman/:id")
deleteProfile( 
@Param("id", ParseIntPipe) id:number
  ): any {
return this.DeleveryManService.deleteProfile(id);
}

@Get('/signout')
signout(@Session() session)
{
  if(session.destroy())
  {
    return {message:"you are logged out"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
} 

@Post('/sendemail')
sendMail(@Body() mydata){
return this.DeleveryManService.sendMail(mydata);
}

  

  @Post("/insertProduct")
  @UsePipes(new ValidationPipe())
  ProductInsert(@Body() mydto:ProductForm): any {
    return this.DeleveryManService. ProductInsert(mydto);
  }

  @Get("/viewAllProduct")
  getProduct(): any { 
      return this.DeleveryManService.viewAllProduct();
  }


}
