const express = require('express');
const {create_article,delete_article,fetch_article,update_article} = require('../articles_route/middlewares');

const article_route  = express.Router();
article_route.route('/articles')
    .get(fetch_article)
    .post(create_article)
    .patch(update_article)
article_route.route('/articles/:id')
    .patch(update_article)
    .get()
    .delete(delete_article)
article_route.route('/articles/?category="$s"')
module.exports = article_route;




