import { Column, Entity, JoinColumn, ManyToMany } from "typeorm";
import Model from "./model.entity";
import { User } from "./User";

enum categoryType {
  TOWEL = "Toalha",
  PURSE = "Bolsa",
  COVER = "Capa",
  AMERICAN_GAME = "Jogo Americano",
  MASK = "Máscara",
}

@Entity()
export class Product extends Model {
  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ default: true })
  available: boolean;

  @Column({ type: "enum", enum: categoryType })
  category: categoryType;

  @Column()
  image: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  width: number;

  @Column()
  material: string;

  @Column()
  description: string;

  @ManyToMany(() => User, (user) => user.products)
  @JoinColumn()
  users: User[];
}
