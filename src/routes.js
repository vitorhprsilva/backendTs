const { Router } = require('express');
const { route } = require('./app');

const login = require('./controllers/login')

const routes = new Router();

routes.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Bem vindo',
        version: '1.0.0',
    });
    console.log('conectado')
});

routes.post('/login', login.createLogin);

routes.post('/login/show', login.mostraUser);

routes.post('/login/entraUsuario', login.verificaLogin);

module.exports = routes;