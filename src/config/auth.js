const localStrategy = require('passport-local').Strategy;
const models = require('../models');
const bcrypt = require('bcryptjs');

const usuario = models.usuario;



module.exports = async function(passport){

    passport.use(new localStrategy({usernameField: 'name'},(name, password, done) =>{
        usuario.findOne({name: name}).then((usuario)=>{

            if(!usuario){
                return done(null, false, {message: "Esta conta não existe"});
            }

            bcrypt.compare(password, usuario.password, (erro, batem) =>{

                if(batem){
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Senha incorreta'})
                }

            })

        });

    }));

    passport.serializeUser((user, done) =>{

        done(null, user.id);

    });

    passport.deserializeUser((user, done) =>{

        user.findById(id, (err,user)=>{
            done(err, user);
        })

    });

}