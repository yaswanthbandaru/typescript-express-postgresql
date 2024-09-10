import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from "typeorm";
import { Project } from "./Project";
import { Employee } from "./Employee";

export class Task {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    title: string

    @Column()
    description: string

    @Column({ nullable: true })
    dueDate?: Date

    @Column()
    priority: string // e.g => low, medium, hight
    
    @Column()
    status: string // "not started", "in progress", "completed"

    @ManyToOne(() => Project, (project) => project.tasks )
    project: Project

    @ManyToMany(() => Employee, (employee) => employee.tasks)
    employees: Employee[]
}