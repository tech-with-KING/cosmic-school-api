const mongoose=require('mongoose');

const authorschema= new mongoose.Schema({
    title:{},
    author:{},
    article:{
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
        required:true,
        min:4,
        max:20,
        uppercase:true,
	default:null
    }
}
    
})

module.exports=mongoose.model('article',authorschema);
