const bcrypt = require('bcryptjs');
const passport = require('passport')

const initializePassport = require('../config/auth');
const models = require('../models');


exports.createLogin = async (req, res, next) => {
    const { email, password } = req.body;


    try {
        // const email = req.body.email;
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await models.usuario.create({email, password});

        res.status(201).send({
            message: 'login adicionado com sucesso!',
            body: {
            login: { email, password },
            },
        });

    } catch (error) {

        res.status(400).send({
           message: 'usuário já existe',
        });
        
    }

};

exports.mostraUser = async (req,res) => {
    const usuarios = await models.usuario.findAll();

    usuarios.forEach((usuario) => {
        console.log(usuario.email)
    });

    res.status(201).send({
        body: {
            email: usuarios.email
        },
    })

}

exports.verificaLogin = async (req, res) => {

    const email = req.body.email;
    const project = await models.usuario.findOne({ where: { email: email } });

    if(project!=null){
        res.status(201).send({
            message: 'logado',
        })
    } else {
        res.status(400).send({
            message: 'login ou senha errado',
        })
    }

}