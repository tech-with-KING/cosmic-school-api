const express = require('express')
const connectdb = require('./mongoose/connectdb')
const articles = require('./articles_route/articles')
const register = require('./user_route/user')
const cors = require('cors')
require('dotenv').config()
const port = 8080;
const app=express()
connectdb(process.env.DB_URI)
app.use(express.json())
app.use(cors({
    origin:'*'
}))
app.use('/',articles)
app.use('/',register)
