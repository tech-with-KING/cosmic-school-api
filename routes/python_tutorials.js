const express=require('express')
const python_course_route=express.Router()
const article = require('../mongoose/data_model')
python_course_route
    .route('/python_tutorials')
        .post(
            async(req,res)=>{
                const schema= new article(
                    {
                        name:req.body.name,
                        para:req.body.para,
                        description:req.body.description,
                        author:req.body.author,
                    })
                    try {
                        const savedschema=await schema.save() 
                        res.send(savedschema)
                        console('saved')
                    } catch (error) {
                        res.status(401).send(error)
                        console.log(error+': from mongoose message')
                    }
                }
        )
        //get request
        .get(
            async(req,res)=>{
                try {
                    res.send(savedschema)
                    console('saved')
                } catch (error) {
                    console.log(error+': from mongoose message')
                }

            }
        )


module.exports=python_course_route;