const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('usuario', {

    name: {
        type: Sequelize.STRING(1234),
    },
    password: {
        type: Sequelize.STRING(1234),
        allowNull: false
    }

});

module.exports = User