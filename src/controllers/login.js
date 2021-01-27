const models = require('../models')

exports.createLogin = async (req, res) => {
    const { name, password } = req.body;

    await models.usuario.create({name, password});
  
    res.status(201).send({
        message: 'login adicionado com sucesso!',
        body: {
          login: { name, password },
        },
    });

};

exports.mostraUser = async (req,res) => {
    const usuarios = await models.usuario.findAll();

    usuarios.forEach((usuario) => {
        console.log(usuario.name)
    });

    res.status(201).send({
        body: {
            name: usuarios.name,
        },
    })

}

exports.verificaLogin = async (req, res) => {

    const { name, password } = req.body;  
    
    
    const usuarios = await models.usuario.findAll();

    usuarios.forEach((usuario) => {
        if(name == usuario.name){
            console.log(usuario.password);
        }
    });



}