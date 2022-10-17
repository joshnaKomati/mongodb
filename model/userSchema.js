const mongoose=require("mongoose")
const usermodel=new mongoose.Schema({
    name:String,
    age:Number,
    rollno :Number,
    classes:Number
})
module.exports=new mongoose.model('student',usermodel)
db.post.agg