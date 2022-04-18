const express=require('express')
const schema = require('./auth/connectdb')
const conned = require('./mongoose/connectdb')
const app=express()



// app.use(connectdb())
connectdb()
app.listen('3000',()=>{
    console.log(schema)
    console.log('hello world')
})