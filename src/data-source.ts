import { DataSource, Table } from "typeorm";
import { Employee } from "./entity/Employee";
import * as dotenv from "dotenv";
import { Organization } from "./entity/Organization";
import { Project } from "./entity/Project";
import { Task } from "./entity/Task";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "avatar007",
    synchronize: false,
    logging: true,
    entities: [Employee, Organization, Project, Task],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
});