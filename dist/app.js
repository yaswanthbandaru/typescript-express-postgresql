"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const database = require('./db/db'); // Import the database connection
require('dotenv').config();
const express = require('express');
const { postgraphile } = require('postgraphile');
const data_source_1 = require("./data-source");
const User_1 = require("./entity/User");
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(postgraphile(process.env.DB_URL, 'public', {
    graphiql: true,
    enhanceGraphiql: true,
}));
// Connect to PostgreSQL database
data_source_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Data source has been initialiazed');
    // Define the CRUD operations
    app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        const users = yield userRepository.find();
        console.log(users);
        res.json(users);
    }));
    app.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        const newUser = userRepository.create(req.body);
        const result = yield userRepository.save(newUser);
        console.log(result);
        res.json(result);
    }));
    app.put("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        const { id } = req.params;
        const { firstname, lastname, email } = req.body;
        const user = yield userRepository.findOneBy({ id: parseInt(id) });
        if (!user)
            return res.status(404).send("User not found");
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        const updateUser = yield userRepository.save(user);
        console.log(updateUser);
        res.json(updateUser);
    }));
    app.delete("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        const { id } = req.params;
        const user = yield userRepository.findOneBy({ id: parseInt(id) });
        if (!user) {
            return res.status(404).send("User not found");
        }
        yield userRepository.remove(user);
        res.send("User deleted successfully");
    }));
    app.listen(port, () => {
        console.log(`Server is running on https://localhost:${port}`);
    });
})).catch((error) => {
    console.error("Error during Data Source initialization ", error);
});
