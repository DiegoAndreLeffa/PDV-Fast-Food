import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Sandwich } from "../sandwich/sandwich.entity";

@Entity()
export class Extra {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 100, type: "varchar" })
  name: string;

  @Column("decimal", { precision: 5, scale: 2 })
  price: number;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  img: string;
}
