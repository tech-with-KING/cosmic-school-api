const express=require('express')
const connectdb= require('./routes/mongoose/connectdb')
const articles = require('./routes/articles_route/articles')
require('dotenv').config()
console.log('from db '+process.env.DB_URI)
const app=express()
connectdb(process.env.DB_URI)
app.use(express.json())
app.use('/',articles)

app.listen('5500',()=>{
    console.log('hello world')
})
