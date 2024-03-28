const knex = require('../database/connection')

const listaUsuarios = async (req, res) => {
  try {
    const lista = await knex('usuarios')

    return res.status(200).json(lista)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

const cadastrarUsuarios = async (req, res) => {
  const { nome, email, senha } = req.body

  try {
    const cadastro = await knex('usuarios')
      .insert({ nome, email, senha })
      .returning('*')

    return res.status(201).json(cadastro)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

const atualizaCadastro = async (req, res) => {
  const { nome, email, senha } = req.body

  const { id } = req.params

  try {
    const atualiza = await knex('usuarios')
      .update({ nome, email, senha })
      .where('id', id)
      .returning('*')

    return res.status(201).json(atualiza)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

const excluiUsuario = async (req, res) => {
  const { id } = req.params

  try {
    const excluir = await knex('usuarios').del().where('id', id).returning('*')

    return res.status(200).json(excluir)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

module.exports = {
  listaUsuarios,
  cadastrarUsuarios,
  atualizaCadastro,
  excluiUsuario
}
