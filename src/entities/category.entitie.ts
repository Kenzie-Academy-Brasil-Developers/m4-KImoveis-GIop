import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RealEstate } from "./index";
@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45, unique: true })
  name: string;

  @OneToMany(() => RealEstate, (RealEstate) => RealEstate.category)
  realEstate: RealEstate[];
}
export { Category };
