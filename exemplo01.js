// Como se conectar a um BD, usando o Sequelize.
const Sequelize = require('sequelize');

/*
Parâmetros: nome do BD, usuario do BD, senha do BD,
objeto JSON {host:servidor onde o BD mysql foi
criado, dialect: qual o tipo de BD a se conectar}.
*/

const sequelize = new Sequelize('teste', 'root', 'gtoxbx1289', {host: 'localhost', dialect: 'mysql'});

// Testando a conexão com o BD.
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
    }).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
    })
