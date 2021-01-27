const sequelize = require('../config/database')

const models = {
    usuario: require('./User'),
    sequelize: sequelize
};

module.exports = models;