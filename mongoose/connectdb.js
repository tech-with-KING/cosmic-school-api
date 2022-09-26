const mongoose=require('mongoose')

connectdb=async(url)=>{
    try {
        const connect=await mongoose.connect(url,{useNewUrlParser:true},()=>{ 
            console.log('connected to db')
	    console.log(typeof(url))
        }
        )
    } catch (error) {
        console.log('from mongodb:'+error)
    }

}
module.exports=connectdb;
