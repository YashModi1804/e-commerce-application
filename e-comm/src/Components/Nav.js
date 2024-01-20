import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';

export default function Nav() {
    const auth = localStorage.getItem('user');
    const navigate=useNavigate()
    const logout=()=>{
        console.warn("Log Out")
        localStorage.clear()
        navigate('/signup')
        
    }
    return (
        <div>
            { auth? <ul className='nav-ul'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add-product'>Add Product</Link></li>
                <li><Link to='/update'>Update Product</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                {/* <li>{auth ? <Link onClick={logout} to='/signup'>Log Out</Link> : <Link to='/signup'>SignUp</Link>}</li> */}
                <li><Link onClick={logout} to='/signup'>Log Out ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            
            <>
              <ul className='nav-ul'>
                <li><Link to='/signup'>SignUp</Link></li>
                <li><Link to='/login'>LogIn</Link></li>
               </ul>
            </>

            }
        </div>
    );
}
