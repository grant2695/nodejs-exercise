


const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:SNICKERS12@localhost/database', {logging: false});
const bcrypt = require('bcrypt');





module.exports = {
   bcrypt,

    sequelize,
    };
