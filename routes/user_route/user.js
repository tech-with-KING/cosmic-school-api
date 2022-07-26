const express = require('express');
const {create_user,get_user,update_user,delete_user} = require('./middlewares');


const register_user  = express.Router();
register_user.route('/register')
    .get(get_user)
    .post(create_user)
    .patch()
    




module.exports = register_user;




