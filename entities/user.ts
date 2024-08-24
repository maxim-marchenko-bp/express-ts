import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, type: 'varchar' })
  name!: string;

  @Column({ nullable: false, type: 'varchar' })
  username!: string;

  @Column({ nullable: false, type: 'varchar' })
  email!: string;

  @Column({ nullable: false, type: 'varchar' })
  password!: string;

  @Column({ type: 'int' })
  age?: number;

  @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
  gender?: 'm' | 'f' | 'u';

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[] = [];
}
