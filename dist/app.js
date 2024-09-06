"use strict";
require('dotenv').config();
const express = require('express');
const { postgraphile } = require('postgraphile');
// import { AppDataSource } from "./data-source";
// import { User } from './entity/User';
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(postgraphile(process.env.DB_URL, 'public', {
    graphiql: true,
    enhanceGraphiql: true,
}));
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
