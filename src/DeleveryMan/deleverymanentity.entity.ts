import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert } from 'typeorm';
import { ProductEntity } from './productentity.entity';
@Entity("Delevery")
export class DeleveryManEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Firstname: string;

  @Column()
  Lastname: string;

  @Column()
  Username: string;

  @Column()
  Email: string;

  @Column()
  Mobile: string;

  @Column()
  password:string;

  


  @ManyToOne(()=> DeleveryManEntity,(Delevery)=>Delevery.Products)
  Products:ProductEntity
 
}