const express = require('express')
const connectdb = require('./mongoose/connectdb')
const articles = require('./articles_route/articles')
const register = require('./user_route/user')
const cors = require('cors')
const serverless = require('serverless-http')
require('dotenv').config()
const port = process.env.PORT
const app=express()
connectdb(process.env.DB_URI)
app.use(express.json())
app.use(cors({
    origin:'*'
}))
app.use('/',articles)
app.use('/',register)

module.exports.handler = serverless(app)
