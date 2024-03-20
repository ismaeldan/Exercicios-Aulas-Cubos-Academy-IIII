const express = require('express')
const { agenda, atualizaAgenda, deleteAgenda } = require('./controllers/agenda')
const farmacia = require('./controllers/farmacia')

const rotas = express()

rotas.get('/agenda', agenda)

rotas.put('/:id', atualizaAgenda)

rotas.get('/farmacia', farmacia)

rotas.delete('/:id', deleteAgenda)

module.exports = rotas
