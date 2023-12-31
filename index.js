const express=require('express')
const app=express()
app.get('/',(req,resp)=>{
    resp.send("Mern Stack Project")
})
app.listen(5000)