import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
export default function Login(){
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");
  const navigate=useNavigate()
  const collectData=async ()=>{
    console.warn(email,password)
    let result = await fetch('http://localhost:3000/login',{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':"application/json"
      }
    })
    result=await result.json()
    console.warn(result)
    if(result.name){
      localStorage.setItem("user",JSON.stringify(result))
      navigate('/')
    }
    else{
      alert('No User Found')
    }
  }
  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  })
    return(
        <div>
            <div className='sign-up'>
            <h1>Login</h1>
            <input type='email' placeholder='Enter the Email' onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <input type='password' placeholder='Enter the Password'onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <button className="btn-sigup" onClick={collectData}>Submit</button>
        </div>
        </div>
    )
    }