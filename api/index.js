
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
//para trabalhar com json
//const bodyParser = require('body-parser')
const config = require('config')
//
//app.use(bodyParser.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.listen(config.get('api.porta'), () => console.log('A api está funcionando'))