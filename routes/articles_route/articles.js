const express = require('express');
const {create_article,delete_article,fetch_article,update_article} = require('../articles_route/middlewares');


const article_route  = express.Router();
article_route.route('/articles')
    .get()
    .post(create_article)
    .patch(update_article)
module.exports = article_route;




