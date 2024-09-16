import { Entity,  PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany } from "typeorm";
import { Organization } from "./Organization";
import { Employee } from "./Employee";
import { Task } from "./Task";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ nullable: true })
    description?: string

    @Column({ nullable: true })
    startDate?: Date 

    @Column({ nullable: true })
    endDate?: Date 

    @Column()
    status: string 

    @ManyToOne(() => Organization, (organization) => organization.projects, { onDelete: "CASCADE" })
    organization: Organization

    @ManyToMany(() => Employee , (employee) => employee.projects )
    employees: Employee[]

    @OneToMany(() => Task, (task) => task.project)
    tasks: Task[]
}