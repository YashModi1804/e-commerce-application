import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
const PrivateComponent=()=>{
    const auth=localStorage.getItem('user')
    return auth?<Outlet/>:<Navigate to='/signup'/>
    //if u take a look app.js u will came to know there is a one nested route which is used to privatise the elements and in return value we are using it to access the child elements
}
export default PrivateComponent