const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/mongodb",()=>{
    console.log("db is connected");
})