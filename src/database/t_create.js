const models = require('../models');

async function createTables(){
    
    await models.sequelize.sync({force: true});
    await models.sequelize.close();

    console.log("tabelas criadas");
}

createTables();