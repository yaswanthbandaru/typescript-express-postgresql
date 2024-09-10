import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Employee } from "./Employee";
import { Project } from "./Project";

Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    address: string

    @Column({ nullable: true})
    url?: string 

    @Column({ nullable: true })
    phone?: string

    @Column({ nullable: true })
    description?: string 

    @OneToMany(() => Employee, (employee) => employee.organization )
    employees: Employee[]

    @OneToMany(() => Project, (project) => project.organization )
    projects: Project[]
}