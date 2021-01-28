const bcrypt = require('bcryptjs');
const passport = require('passport')

const initializePassport = require('../config/auth');
const models = require('../models');

initializePassport(passport)


exports.createLogin = async (req, res, next) => {
    const { name, password } = req.body;

    try {
        const name = req.body.name;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await models.usuario.create({name, hashedPassword});

        res.status(201).send({
            message: 'login adicionado com sucesso!',
            body: {
            login: { name, hashedPassword },
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
        console.log(usuario.name)
    });

    res.status(201).send({
        body: {
            name: usuarios.name
        },
    })

}

exports.verificaLogin = async (req, res) => {


    try {
        const name = req.body.name;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
    } catch (error) {
        
    }
    
    
    const usuarios = await models.usuario.findOne({where: {name: name}}).then(()=>{
        res.status(201).send({
            message: 'logado',
        }).end();
    }).catch(
        res.status(400).send({
            message: 'login ou senha errado',
        }).end()
    );



}