const mongoose=require('mongoose')
connectdb=async()=>{
    try {
        const connect= mongoose.connect('helloworld',()=>{ }
        )
    } catch (error) {
        console.log(error)
    }

}
module.exports=connectdb;