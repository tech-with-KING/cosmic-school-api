const mongoose=require('mongoose')

connectdb=async(url)=>{
    try {
        const connect=await mongoose.connect(url,{useNewUrlParser:true},()=>{ 
            console.log('connected to db')
        }
        )
    } catch (error) {
        console.log('from mongodb:'+error)
    }

}
module.exports=connectdb;
