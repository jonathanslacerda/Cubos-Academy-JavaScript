const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'tZfyn18t',
    database: 'biblioteca'
});

module.exports = pool;