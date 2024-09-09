// const database = require('./db/db'); // Import the database connection
require('dotenv').config();
const express = require('express');
const { postgraphile } = require('postgraphile');
import { AppDataSource } from "./data-source";
import { User } from './entity/User';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(
    postgraphile(
        process.env.DB_URL,
        'public',
        {
            graphiql: true,
            enhanceGraphiql: true,
        }
    )
)

// Connect to PostgreSQL database
AppDataSource.initialize()
    .then(async () => {
        console.log('Data source has been initialiazed')

        // Define the CRUD operations
        app.get("/users", async (req: any, res: any) => {
            const userRepository = AppDataSource.getRepository(User);
            const users = await userRepository.find();
            console.log(users);
            res.json(users);
        })

        app.post("/users", async (req: any, res: any) => {
            const userRepository = AppDataSource.getRepository(User);
            const newUser = userRepository.create(req.body); 
            const result = await userRepository.save(newUser);
            console.log(result);
            res.json(result);
        })

        app.put("/users/:id", async (req: any, res: any) => {
            const userRepository = AppDataSource.getRepository(User);
            const { id } = req.params;
            const { firstname, lastname, email } = req.body;
            const user = await userRepository.findOneBy({ id: parseInt(id) })
            if(!user) return res.status(404).send("User not found")
            user.firstname = firstname
            user.lastname = lastname
            user.email = email
            const updateUser = await userRepository.save(user)
            console.log(updateUser)
            res.json(updateUser)
        })

        app.delete("/users/:id", async (req: any, res: any) => {
            const userRepository = AppDataSource.getRepository(User)
            const { id } = req.params;
            const user = await userRepository.findOneBy({ id: parseInt(id) })
            if(!user) { return res.status(404).send("User not found")}
            await userRepository.remove(user)
            res.send("User deleted successfully")
        })

        app.listen(port, () => {
            console.log(`Server is running on https://localhost:${port}`);
        })
    }).catch((error: any) => {
        console.error("Error during Data Source initialization ", error);
    })


