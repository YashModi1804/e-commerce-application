import React,{useState} from 'react'

export default function SignUp(){
    //useState is hook[a functional entity to intialize a state] whereas state is something which is used when the parameters of the component changes frequently whereas in opposite to this we have props which are static and immutable
    //syntax is very simple first element is intial state second is setstate and inside the usestate we have "" which indicate the first value or intial value of the variable
    
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const collectData=()=>{
        console.warn(name,email,password)
    }
    return(
        <div className='sign-up'>
            <h1>Register</h1>
            <input type='text' placeholder='Enter the Name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <input type='email' placeholder='Enter the Email'value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input type='password' placeholder='Enter the Password'value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button onClick={collectData}>Submit</button>
        </div>
    )

}