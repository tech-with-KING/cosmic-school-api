const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema
(
    {
	username:{
	    type:String,
	    required:true,
	    unique:true,
	},
	email:{
	    type:String,
	    required:true,
	    unique:true,
	},
	password:{
	    type:String,
	    required:true,
	    unique:true,
	},
	profileImg:{
	    type:String,
	    required:true,
	    unique:true,
	},
    },{timestamps:true}
);

module.exports = mongoose.model('user',UserSchema);
