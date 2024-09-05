"use strict";
require('dotenv').config();
const { Pool } = require('pg');
// Create a pool instance to manage multiple connections
const pool = new Pool({
    user: process.env.DB_USER, // PostgreSQL username
    host: process.env.DB_HOST, // Database host
    database: process.env.DB_NAME, // Your database name
    password: process.env.DB_PASSWORD, // PostgreSQL user password
    port: process.env.DB_PORT, // PostgreSQL default port
});
module.exports = pool;
