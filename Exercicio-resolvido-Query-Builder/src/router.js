const express = require('express')
const {
  listaUsuarios,
  cadastrarUsuarios,
  atualizaCadastro,
  excluiUsuario
} = require('./controllers/usuarios')

const rotas = express()

rotas.get('/lista', listaUsuarios)

rotas.post('/cadastro', cadastrarUsuarios)

rotas.put('/atualiza/:id', atualizaCadastro)

rotas.delete('/excluir/:id', excluiUsuario)

module.exports = rotas
