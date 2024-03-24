const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '@fe',
    database: 'knexjs'
  }
})

module.exports = knex
