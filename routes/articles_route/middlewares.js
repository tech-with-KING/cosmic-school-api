const article  = require('./article_schema')
const create_article =async (req,res)=>{
    try{
	const Article = new article(
	    {
		title:req.body.title,
		author:req.body.author,
		posterImg:req.body.posterImg,
		article:req.body.article,
		category:req.body.category
	    })
	const newarticle = await Article.save()
	    res.status(200).json(newarticle)
    }catch(err){
	    res.status(500).send(err+'from fetch')
	}
}
const delete_article = async(req,res)=>{
    try{
    const target = await article.findById(req.body.article.id);
    res.send(target)
    article.deleteOne(target);
    article.findByIdAndDelete(req.body.title);
	res.send.json(target).send(target)}
    catch(error){
	res.status(500).json(error)
    }
}
const update_article = async(req,res)=>{
    try{
    const target = await article.findById(req.body.article);
    res.send(target)
    article.updateOne(target)
	res.json(target).send(target);
	res.send("hello world");}
    catch(error){
	res.status(500).json(error)
    }
}
const fetch_article = async(req,res)=>{
        try{
   	    const task = await article.find({})
            res.status(200).json({task})
	    }
    
    catch(error){
        res.status(500).send(error+'from get article')
    }
}
module.exports ={create_article,delete_article,fetch_article,update_article};
