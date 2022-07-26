const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema
(
    {
	username:{
	    type:String,
	    required:true,
	    unique:true,
	    default:"taurus"
	},
	email:{
	    type:String,
	    required:true,
	    unique:true,
	    default:"taurus"
	},
	password:{
	    type:String,
	    required:true,
	    unique:true,
	    default:"taurus"
	},
	profileImg:{
	    type:String,
	    required:true,
	    unique:true,
	    default:'toe'
	},
    },{timestamps:true}
);

module.exports = mongoose.model('user',UserSchema);
