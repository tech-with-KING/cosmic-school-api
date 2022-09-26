const mongoose=require('mongoose')
connectdb=async(url)=>{
    try {
        const connect=await mongoose.connect('mongodb+srv://kingsley:kingsley2018@cluster0.orzrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true},()=>{ 
            console.log('connected to db')
        }
        )
    } catch (error) {
        console.log('from mongodb:'+error)
    }

}
module.exports=connectdb;
