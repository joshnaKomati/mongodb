const express=require("express")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require("./configur/db")
const usermodel=require('./model/userSchema')
app.post("/add",async(req,res)=>{
    const {name,age,rollno,classes}=req.body
   const result= await usermodel.create({name,age,rollno,classes})
    res.json({message :"data added",result})

})

app.listen(4000,()=>{
    console.log("server is working");
})