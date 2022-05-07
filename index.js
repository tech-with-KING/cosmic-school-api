const express=require('express')
const connectdb= require('./mongoose/connectdb')
const python_course_content=require('./routes/python_tutorials')





const app=express()
connectdb()
app.use(express.json())
app.use('/',python_course_content)

app.listen('5500',()=>{
    console.log('hello world')
})