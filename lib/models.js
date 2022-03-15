const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db');
const bcrypt = require('bcrypt');
const {hashPassword} = require("mysql/lib/protocol/Auth");
const {request} = require("express");


    class User extends Model{

    }
    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{

            type:DataTypes.STRING,
            allowNull: false

}


    },{

        sequelize,

        modelName: 'User'
})
User.beforeCreate((user, options) => {

    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;

        })
        .catch(err => {
            throw new Error();
        });
});

sequelize.sync({alter: true});





module.exports = {


    User,


};
