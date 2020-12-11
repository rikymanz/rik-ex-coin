const mssql = require('mssql');
require('dotenv').config();

const pool = new mssql.ConnectionPool({
    "server": process.env.DB_HOST,
    "user": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    //"port": process.env.DB_PORT
});

module.exports  = pool;
