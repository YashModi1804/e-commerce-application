require('./db/config');
const cors = require('cors'); 
const User = require('./db/user');
const Product=require('./db/product');
const express = require('express');
const app = express();
app.use(cors())
app.use(express.json());
app.post('/signup', async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
    result = result.toObject()
    delete result.password
    console.log(result); 
});
app.post('/login',async (req,resp)=>{
    let user=await User.findOne(req.body).select("-password")
    if(req.body.email && req.body.password){
        if(user){
            resp.send(user)
        }
        else{
            resp.send({result:'No User Found'})
        }
    }
    else{
        resp.send({result:'No User Found'}) 
    }
    
})
app.post('/add-product',async(req,resp)=>{
    let product=new Product(req.body)
    let result= await product.save()
    resp.send(result)
})
app.listen(3000);
