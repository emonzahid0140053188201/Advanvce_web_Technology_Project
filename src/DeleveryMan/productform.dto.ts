import { IsNotEmpty, IsString } from "class-validator";

export class ProductForm{

    @IsString()
    @IsNotEmpty()
    Name: string;

   
    @IsNotEmpty()
    
    Price: string;

   //@IsString()
    //@IsNotEmpty()
 
    Market_Cap: string;
    
    @IsString()
    @IsNotEmpty()
   
    Volume: string; 

  
}