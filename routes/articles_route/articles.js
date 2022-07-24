const schema = require('../mongoose/article_schema')
const router=require("express").Router()
const express=require("express")
const middlewares = require("./articles_data")
router.route("/article/emacs_lspe")
    .post((req,res)=>{
	middlewares.create_article()
    })
    .get((req,res)=>{
	middlewares.fetch_article()
    })
    .delete(()=>{
	middlewares.delete_article
    })
    .patch(()=>{
	middlewares.update_article()
    })
router.route('/articles/genre')
    .post()
    .get()
    .delete()
    .patch()
router.route('/articles/:id')
    .post()
    .get()
    .delete()
    .patch()
