import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Organization } from "./Organization";
import { Project } from "./Project";
import { Task } from "./Task";


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

    @Column({ nullable: true })
    email?: string

    @Column({ nullable: true })
    phoneNumber?: string 

    @ManyToOne(() => Organization, (organization) => organization.employees)
    organization: Organization 

    @ManyToMany(() => Project, (project) => project.employees )
    @JoinTable()
    projects: Project[]

    @ManyToMany(() => Task, (task) => task.employees)
    @JoinTable()
    tasks: Task[]
}