import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Faculty {
    @PrimaryGeneratedColumn()
    id :string ;

    
        @Column()
        name :string
         @Column()
        experties :string 
        @Column()
        noOfPublication :number 
}
