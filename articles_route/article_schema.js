const mongoose=require('mongoose');
const Articleschema = mongoose.Schema({
  heading:{
        type:String,
        required:true,
        min:4,
        max:20,
        uppercase:true
	},
    paragraph:{
        type:String,
        required:true,
        min:4,
        max:20,
        uppercase:true
    },
    snippet:{
        type:String,
        required:true,
        min:4,
        max:20,
        uppenrcase:true
    },
    img:{
        type:String,
        required:false,
        min:4,
        max:20,
        uppercase:true,
	default:null
    }
});
const articleschema= new mongoose.Schema({
    title:{
	type:String,
	required:true,
	default:null,
	max:85,
	min:8,
    },
    author:{
	type:String,
	required:true,
	default:null,
	max:15,
	min:4,
    },
    posterImg:{
	type:String,
	required:true,
	default:null,
	max:85,
	min:8,
    },
    article:{
	type:Articleschema,
	required:true
    },
    category:{
	type:String,
	required:true,
    }
})

module.exports = mongoose.model('article',articleschema);