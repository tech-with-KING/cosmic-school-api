const express=require('express')
const connectdb= require('./routes/mongoose/connectdb')
const articles = require('./routes/articles_route/articles')
const register = require('./routes/user_route/user')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT
const app=express()
connectdb(process.env.DB_URI)
app.use(express.json())
app.use(cors({
    origin:"https://cosmic-school-api-node.vercel.app"
}))
app.use('/',articles)
app.use('/',register)

app.listen(port,()=>{
    console.log('server running')
})
