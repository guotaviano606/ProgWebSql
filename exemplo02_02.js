const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'gtoxbx1289', {host: 'localhost', dialect: 'mysql'});

// Criação do modelo/tabela "usuarios".
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.sync({force: true})