import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeleveryManModule } from './DeleveryMan/deleverymanmodule.module';
import { MailModule } from './mail/mail.module';
@Module({
  imports: [DeleveryManModule, TypeOrmModule.forRoot(
    { type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'zahid123#',
     database: 'DeleveryBoy',
     autoLoadEntities: true,
     synchronize: true,
   }
   ), MailModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
