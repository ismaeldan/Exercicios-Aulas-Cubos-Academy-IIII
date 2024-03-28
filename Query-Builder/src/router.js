const express = require('express')
const {
  agenda,
  atualizaAgenda,
  deleteAgenda,
  anotacoes,
  listaAnotacoes
} = require('./controllers/agenda')
const farmacia = require('./controllers/farmacia')

const rotas = express()

rotas.get('/agenda', agenda)

rotas.put('/:id', atualizaAgenda)

rotas.get('/farmacia', farmacia)

rotas.delete('/:id', deleteAgenda)

rotas.post('/:id/anotacoes', anotacoes)

rotas.get('/anotacoes', listaAnotacoes)

module.exports = rotas
