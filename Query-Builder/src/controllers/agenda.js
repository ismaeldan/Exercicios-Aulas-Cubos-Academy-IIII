const knex = require('../database/connection')

const agenda = async (req, res) => {
  const agenda = await knex('agenda').debug()

  //const agenda = await knex('agenda').where('id', 2).debug()

  //const agenda = await knex('agenda').where('id', '!=', 2).debug()

  //const agenda = await knex('agenda').where({ id: 2 }).first().debug()

  //const agenda = await knex('agenda').where({ id: 2 }).select('id', 'nome').first().debug()

  //const agenda = await knex('agenda').whereNull('email').debug()

  //const agenda = await knex('agenda').whereNotNull('email').debug()

  //const agenda = await knex('agenda').whereBetween('id', [2, 10]).debug()

  //const agenda = await knex('agenda').whereBetween('id', [1, 10]).orderBy('id', 'desc').debug()

  //const agenda = await knex('agenda').distinct('email', 'nome').debug()

  //const agenda = await knex('agenda').select('email').groupBy('email').count().debug()

  //const agenda = await knex('agenda').limit(2).offset(2).debug()

  //const agenda = await knex('agenda').whereNull('email').count().debug()

  //const agenda = await knex('agenda').whereNull('email').sum('id').debug()

  //const agenda = await knex('agenda').whereNull('email').avg('id').debug()

  //const agenda = await knex('agenda').whereNull('email').min('id').debug()

  // const agenda = await knex('agenda')
  //   .whereNull('email')
  //   .max('id')
  //   .first()
  //   .debug()

  // const ismael = {
  //   nome: 'Ismael Dantas',
  //   email: 'ismael@email.com',
  //   telefone: '(11) 9565-4619'
  // }

  // const claudia = {
  //   nome: 'Claudia Oliveira',
  //   email: 'claudia@email.com',
  //   telefone: '(11) 6824-6411'
  // }

  // const agenda = await knex('agenda')
  //   .insert([ismael, claudia])
  //   .returning('*')
  //   .debug()

  return res.json(agenda)
}

const atualizaAgenda = async (req, res) => {
  const { nome, email, telefone } = req.body

  const { id } = req.params

  const agendaAtualizada = await knex('agenda')
    .update({ nome, email, telefone })
    .where('id', id)
    .returning('*')
    .debug()

  return res.json(agendaAtualizada)
}

const deleteAgenda = async (req, res) => {
  const { id } = req.params

  const agendadelete = await knex('agenda').del().where('id', id).debug()

  return res.json(agendadelete)
}

const anotacoes = async (req, res) => {
  const { id } = req.params
  const { nota } = req.body

  const anotacao = await knex('anotacoes')
    .insert({
      agenda_id: id,
      nota: nota
    })
    .returning('*')

  return res.json(anotacao)
}

const listaAnotacoes = async (req, res) => {
  // const anotacao = await knex('anotacoes')
  //   .join('agenda', 'anotacoes.agenda_id', 'agenda.id')
  //   .select('anotacoes.*', 'agenda.nome')

  const anotacao = await knex('anotacoes')
    .leftJoin('agenda', 'anotacoes.agenda_id', 'agenda.id')
    .select('anotacoes.*', 'agenda.nome')

  // const anotacao = await knex('anotacoes')
  //   .rightJoin('agenda', 'anotacoes.agenda_id', 'agenda.id')
  //   .select('anotacoes.*', 'agenda.nome')

  return res.json(anotacao)
}

module.exports = {
  agenda,
  atualizaAgenda,
  deleteAgenda,
  anotacoes,
  listaAnotacoes
}
