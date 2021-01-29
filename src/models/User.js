const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('usuario', {

    email: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = User