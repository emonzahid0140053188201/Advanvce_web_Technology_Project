import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import { DeleveryManEntity } from './deleverymanentity.entity';

@Entity("Product")
export class  ProductEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Price: string;

  @Column()
  Market_Cap: string;

  @Column()
  Volume: string;

  
  
 

@OneToMany(()=> ProductEntity,(Product)=>Product.Delevery)
 Delevery:DeleveryManEntity
 
 
}