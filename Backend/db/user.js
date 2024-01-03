const mongoose= require('mongoose')
const userSchema= new mongoose.Schema({
    name:String,
    age:Number,
    id:String,
    password:Number
})
module.exports=mongoose.model("users",userSchema)