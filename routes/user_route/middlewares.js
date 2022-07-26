const mongoose = require('mongoose')
const user  = require('./user_schema')
const create_user =async(req,res)=>{
    try{
	const User = new user(
	    {
		username:req.body.username,
		email:req.body.email,
		password:req.body.password,
		profileImg:req.body.profileImg
	    })
	const newuser = await User.save()
	res.status(200).json(newuser)
    }catch(err){
	res.status(500).send(err)
    }
    
}
const get_user = async(req,res)=>{
    try{
	res.send("this use has been gotten")
    }catch(err){
	res.status(500).send("can't fetch articles")
    }
}
const update_user = async(req,res)=>{
    try{
	
    }catch(err){
	res.status(500).send("can't fetch articles")
    }   
}
const delete_user =async(req,res)=>{
    try{
	
    }catch(err){
	res.status(500).send("can't fetch articles")
    }
    res.send("hello world");
}
module.exports ={create_user,delete_user,get_user,update_user};
