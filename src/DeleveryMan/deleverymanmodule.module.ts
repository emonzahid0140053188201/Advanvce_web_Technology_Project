import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {DeleverymanController } from './deleveryman.controler';
import { DeleveryManService } from './delverymanservice.service';
import { DeleveryManEntity } from './deleverymanentity.entity';
import { MailerModule } from "@nestjs-modules/mailer";
import { ProductEntity } from './productentity.entity';


@Module({
imports: [MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
               port: 465,
               //gnoreTLS: true,
               secure: true,
               auth: {
                   user: 'zahidhasanaiubedu@gmail.com',
                   pass: 'vqlzpdlcjcoozsza'
               },
               
              }
  }),TypeOrmModule.forFeature([DeleveryManEntity,ProductEntity])],
controllers: [DeleverymanController],
providers: [DeleveryManService],

})

export class DeleveryManModule {}