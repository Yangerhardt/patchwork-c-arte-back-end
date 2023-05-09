import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  private name: string;

  @Column()
  private lastName: string;

  @Column()
  private email: string;

  @Column()
  private password: string;

  @Column({ length: 8 })
  private zip: string;

  @Column()
  private nieghborhood: string;

  @Column()
  private street: string;

  @Column()
  private streetNumber: string;

  @Column()
  private streetComplement: string;

  @Column()
  private city: string;

  @Column({ length: 2 })
  private state: string;

  constructor() {
    this.id = uuidv4();
  }

  public setName(value: string) {
    this.name = value;
  }

  public getName() {
    return this.name;
  }
}
