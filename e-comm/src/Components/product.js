import React from 'react'

const AddProduct=()=>{
    const [name,setName]=React.useState("")
    const [price,setPrice]=React.useState("")
    const [category,setCategory]=React.useState("")
    const [company,setCompany]=React.useState("")
    const userId=JSON.parse(localStorage.getItem("user"))._id
    console.warn(userId)
    function add_product(){
        console.warn(name,price,category,company)
    }
    const result =fetch('http://localhost:3000/signup',{
        method:'post',
        body:JSON.stringify({name,price,category,userId,company})
    })
    return(
        <>
        <h2 className='product-heading'>ADD-PRODUCT</h2>
    <div className='product'>
        
        <input type='text' placeholder='Product Name' onChange={(e)=>{setName(e.target.value)}} value={name}/>
        <input type='text' placeholder='Product Price' onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
        <input type='text' placeholder='Product Category' onChange={(e)=>{setCategory(e.target.value)}} value={category}/>
        <input type='text' placeholder='Product Company' onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
        <button  onClick={add_product}>Submit</button>
    </div></>
    )
}
export default AddProduct;