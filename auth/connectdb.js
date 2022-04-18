
const mongoose=require('mongoose');

const authorschema= new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        min:4,
        max:20,
        uppercase:true
    },
    author:{
        type:String,
        required:true,
        min:4,
        max:20,
        uppercase:true
    },
    parahph:{
        type:String,
        required:true,
        min:4,
        max:20,
        uppercase:true
    },
    description:{
        type:String,
        required:true,
        min:4,
        max:20,
        uppercase:true
    },

}

)

module.exports=authorschema;