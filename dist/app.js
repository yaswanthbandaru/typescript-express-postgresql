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
const express = require('express');
const data_source_1 = require("./data-source");
const User_1 = require("./entity/User");
const app = express();
const port = 3000;
app.use(express.json());
// app.get('/', async (req: XMLHttpRequest, res: any ) => {
//     try {
//         const result: any = await database.query('SELECT * FROM student');
//         console.log(result);
//         res.json(result.rows);
//     } catch (err: any) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });
// app.post('/', async (req: any, res: any) => {
//     try {
//         const { name, phone } = req.body;
//         const result = await database.query(
//             'INSERT INTO student (name, phone) VALUES ($1, $2) RETURNING *',    
//             [name, phone]
//         )
//         console.log(result);
//         res.json(result.rows);
//     } catch (err: any) {
//         console.log(err.message);
//         console.log('server error')
//         res.status(500).send('Server error');
//     }
// })
// app.listen(port, () => {
//     console.log(`Server is running on https://localhost:${port}`);
// })
/*

GET REquest cmd:
curl -X GET http://localhost:3000/

POST Request cmd:
curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{ "name": "ram", "phone": 223231243}'

*/
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
    app.listen(port, () => {
        console.log(`Server is running on https://localhost:${port}`);
    });
})).catch((error) => {
    console.error("Error during Data Source initialization ", error);
});
