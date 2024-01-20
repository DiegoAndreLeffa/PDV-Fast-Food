import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum CartStatus {
  Preparando = "Preparando",
  Finalizado = "Finalizado",
}

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  codigo: string;

  @Column({ type: "varchar" })
  nome: string;

  @Column("json")
  itens: {
    extras: string[];
    name: string;
    quantity: number;
  }[];

  @Column({ type: "varchar" })
  primeiraImagem: string;

  @Column({ type: "varchar" })
  troco: string;

  @Column({ type: "varchar" })
  valorEntregue: string;

  @Column({ type: "varchar", enum: CartStatus, default: CartStatus.Preparando })
  status: string;
}
