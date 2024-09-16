import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
// import { Employee } from "./entity/Employee";
// import { Organization } from "./entity/Organization";
// import { Project } from "./entity/Project";
// import { Task } from "./entity/Task";

dotenv.config();

const DataConfig: any  = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "avatar007",
    database: "todo",
    synchronize: false,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
    // cli: {
    //     migrationsDir: ["src/mig"]
    // }
};

export const AppDataSource = new DataSource(DataConfig);