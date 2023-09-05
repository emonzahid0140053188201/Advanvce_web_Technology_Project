import {MinLength, MaxLength, IsNotEmpty, IsEmail, IsString,IsArray,ArrayMinSize} from "class-validator";

export class DeleveryManForm{

    @IsString()
    @IsNotEmpty()
    Firstname: string;

    @IsString() 
    @IsNotEmpty({message: "Please enter your Lastname"}) 
    Lastname: string;

    @IsString() 
    @IsNotEmpty({message: "Please enter your Username"}) 
    @MinLength(3)
    @MaxLength(20)
    Username: string;
    
    @IsEmail()
    @IsNotEmpty({message: "Please enter your Email Address"})
    Email: string;
    
    @IsString() 
    @IsNotEmpty({message: "Please enter your number "})
    @MaxLength(11)
    Mobile:string;

  

    @IsString() 
    @IsNotEmpty({message: "Please enter your pasword "})
    password: string;

}