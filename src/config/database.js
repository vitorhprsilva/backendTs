const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres','postgres','Postgres2018!',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

module.exports = sequelize;

async function testeConexao(){
    try{
        let result = await sequelize.authenticate();
        console.log("Sequelize realizou a conexão com o banco de dados com sucesso");
    }
    catch(error){
        console.error("Houve um erro ao conectar com o banco: ");
        console.error(error);
        process.exit();
    }
}

testeConexao();