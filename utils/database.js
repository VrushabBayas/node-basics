const mysql = require('mysql2');
const config = {
  host: 'localhost',
  user: 'vrushabh',
  password: 'Vrush@sims123',
  database: 'test',
  port: 3306
}
const pools = mysql.createPool(config)

module.exports = { db: pools.promise(), config };