const express=require('express')
const connectdb= require('./routes/mongoose/connectdb')
const python_course_content=require('./routes/articles_route/articles')
const app=express()
connectdb()
app.use(express.json())
app.use('/',python_course_content)

app.listen('5500',()=>{
    console.log('hello world')
})
