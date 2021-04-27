const Sequelize = require('sequelize')
const config = require('config')
const instancia = new Sequelize(
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
)
//exportar a instancia para poder utilizar em outros arquivos js
module.exports = instancia


