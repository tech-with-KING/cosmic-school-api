const mongoose = require('mongoose')
const article  = require('./article_schema')
const create_article =async (req,res)=>{
        try{
	const Article = new article(
	    {
		title:req.body.title,
		author:req.body.author,
		posteImg:req.body.posterImg,
		article:req.body.article,
	    })
	const newarticle = await Article.save()
	    res.status(200).json(newarticle)
	}catch(err){
	    res.status(500).send(err)
	}
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
