const express = require('express');
const {create_article,delete_article,fetch_article,update_article} = require('../articles_route/middlewares');


const router  = express.Router();
router.route('/emacs_lsp')
    .get(create_article)
    .patch(update_article)
    




module.exports = router




