const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('usuario', {

    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }

});

module.exports = User