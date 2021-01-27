const db = require('../database');

async function dropTables(){
    await db.connect()
    await db.query('DROP TABLE usuario')
    await db.end()

    console.log("Tabelas removidas");
}

dropTables();