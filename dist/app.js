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
const database = require('./db/db'); // Import the database connection
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database.query('SELECT * FROM students');
        console.log(result);
        res.json(result.rows);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}));
app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});
