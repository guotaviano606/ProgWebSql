const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'gtoxbx1289', {host: 'localhost', dialect: 'mysql'});

// Criação do modelo/tabela "postagens".
const Postagem = sequelize.define('postagens', {
    titulo: {
        // Campo com limite de caracteres,
        type: Sequelize.STRING
    },
    conteudo: {
        // Campo com tamanho ilimitado.
        type: Sequelize.TEXT
    }
});

/*
    Sincroniza o modelo com o MySql.
    O comando {force: true} garante que a tabela
    "postagens" será criada.
*/
Postagem.sync({force: true});
