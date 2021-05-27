const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'gtoxbx1289', {host: 'localhost', dialect: 'mysql'});

// Criação do modelo/tabela postagens.
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

// Para criar/inserir uma postagem no BD.
Postagem.create({
    titulo: "Legiao Urbana",
    conteudo: "O sol nasce para todos, só não sabe quem não quer."
})

// Para criar/inserir um usuario no BD.
Usuario.create({
    nome: "Gustavo",
    sobrenome: "Costa",
    idade: 27,
    email: "guotaviano0605@gmail.com"
})