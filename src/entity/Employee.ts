import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Manager } from "./Manager";


@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    department: string

    @Column("decimal", { precision: 12, scale: 2 })
    salary: number

    @ManyToOne(() => Manager, (manager) => manager.employees, { nullable: true })
    manager: Manager
}