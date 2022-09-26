const express = require('express')
const connectdb = require('./mongoose/connectdb')
const articles = require('./articles_route/articles')
const register = require('./user_route/user')
const cors = require('cors')
require('dotenv').config()
const app=express()
connectdb(process.env.DB_URI)
app.use(express.json())
app.use(cors({
    origin:'*'
}))
app.use('/',articles)
app.use('/',register)
app.use('/',(req,res)=>{
    res.send('hallo')
})
app.listen(3000, ()=>{
    console.log('holla')
})
