import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Employee } from './Employee';


@Entity()
export class Manager {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    name: string

    @Column()
    department: string

    @Column("decimal", { precision: 12, scale: 2 })
    salary: number

    @OneToMany(() => Employee, (employee) => employee.manager)
    employees: Employee[]
}