const knex = require('../database/connection')

const farmacia = async (req, res) => {
  //const farmacia = await knex('farmacia').debug()

  //const farmacia = await knex('farmacia').count().debug()

  //const farmacia = await knex('usuarios').min('idade').debug()

  //const farmacia = await knex('farmacia').select('categoria').sum('estoque').whereNotNull('categoria').groupBy('categoria').debug()

  //const farmacia = await knex('farmacia').whereNull('categoria').count('medicamento').debug()

  // const farmacia = await knex('farmacia')
  //   .select('categoria')
  //   .count()
  //   .whereNotNull('categoria')
  //   .groupBy('categoria')
  //   .debug()

  // const farmacia = await knex('usuarios')
  //   .select('idade')
  //   .count()
  //   .where('idade', '>=', 18)
  //   .groupBy('idade')
  //   .debug()

  res.json(farmacia)
}

module.exports = farmacia
