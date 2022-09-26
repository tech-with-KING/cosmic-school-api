const user  = require('./user_schema')
const create_new_user =async (req,res)=>{
    try{
	const User = new user(
	    {
		email:req.body.email,
		username:req.body.username,
		profileImg:req.body.profileImg,
		password:req.body.password,
	    })
	const newuser = await User.save()
	    res.status(200).json(newuser)
    }catch(err){
	    res.status(500).send(err+'from fetch users endpoint')
	}
}
const delete_user = async(req,res)=>{
    try{
    const target = await user.findById(req.body.article.id);
    res.send(target)
    article.deleteOne(target);
    article.findByIdAndDelete(req.body.title);
	res.send.json(target).send(target)}
    catch(error){
	res.status(500).json(error + ' ' + ': from delete user endpoint')
    }
}
const update_user_detail = async(req,res)=>{
    try{
    const target = await article.findById(req.body.article);
    res.send(target)
    user.updateOne(target)
	res.json(target).send(target)
	}
    catch(error){
	res.status(500).json(error + ' '+':user update failed from update endpoint')
    }
}
const fetch_user = async(req,res)=>{
        try{
   	    const users = await user.find({})
            res.status(200).json({user})
	    }
    
    catch(error){
        res.status(500).send(error+'from get article')
    }
}
const fetch_singsle_user = async(req,res)=>{
        try{
   	    const task = await article.find({})
            res.status(200).json({task})
	    }
    
    catch(error){
        res.status(500).send(error+'from get article')
    }
}
module.exports = {create_new_user,fetch_user,update_user_detail,delete_user}
