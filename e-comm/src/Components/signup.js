import React,{useEffect, useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
export default function SignUp(){
    //useState is hook[a functional entity to intialize a state] whereas state is something which is used when the parameters of the component changes frequently whereas in opposite to this we have props which are static and immutable
    //syntax is very simple first element is intial state second is setstate and inside the usestate we have "" which indicate the first value or intial value of the variable
 
    const navigate=useNavigate()//if user is already sign in than it will navigate to home 
    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })
    
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const navigation=useNavigate()
    const collectData= async ()=>{
        console.warn(name,email,password)
        let result=await fetch('http://localhost:3000/signup',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result =await result.json()
        console.warn(result)
        localStorage.setItem("user",JSON.stringify(result))
    
        navigation('/')
  
    }
    return(
        <div className='sign-up'>
            <h1>Register</h1>
            <input type='text' placeholder='Enter the Name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <input type='email' placeholder='Enter the Email'value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input type='password' placeholder='Enter the Password'value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button className="btn-sigup" onClick={collectData}>Submit</button>
        </div>
    )

}