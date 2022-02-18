// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'onoue',
    password: 'onoue86810544',
    database: 'model_example' });

module.exports = connection;