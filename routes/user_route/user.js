const express = require('express');
const {create_new_user,fetch_user,update_user_detail,delete_user} = require('./middlewares');


const register_user  = express.Router();
register_user.route('/register')
    .get(fetch_user)
    .post(create_new_user)
    .patch(update_user_detail)
    .delete(delete_user)
    




module.exports = register_user;




