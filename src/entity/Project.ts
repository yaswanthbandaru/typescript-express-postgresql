import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable, ManyToOne } from "typeorm";
import { Employee } from "./Employee";
import { Organization } from "./Organization";
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
    endDate: Date

    @Column()
    status: string  // e.g => 'active", "completed", "on-hold", "plan"

    @ManyToOne(() => Organization, (organization) => organization.projects )
    organization: Organization

    @ManyToMany(() => Employee,(employee) => employee.projects )
    employees: Employee[]

    @OneToMany(() => Task, (task) => task.project)
    tasks: Task[]
}