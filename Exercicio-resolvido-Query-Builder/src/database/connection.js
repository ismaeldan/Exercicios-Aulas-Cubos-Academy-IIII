const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'Iml07@fe',
    database: 'exercicio_query_builder'
  }
})

module.exports = knex
