require('./backend/db/config')
const User=require('./backend/db/user')
const express=require('express')
const app=express()
app.post('/re',(req,resp)=>{
    resp.send("Mern Stack Project")
})
connectDb()
app.listen(5000)