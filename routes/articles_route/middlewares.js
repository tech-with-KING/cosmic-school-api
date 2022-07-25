const mongoose = require('mongoose')
const article  = require('../mongoose/article_schema')
const create_article = (req,res)=>{
    schema.title = req.body.name
    
}
const delete_article = (req,res)=>{
    res.send("hello world");
}
const update_article = (req,res)=>{
    res.send("hello world");
}
const fetch_article = (req,res)=>{
    res.send("hello world");
}
module.exports ={create_article,delete_article,fetch_article,update_article};
