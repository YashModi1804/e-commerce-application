// in nav.js

import React from 'react';
import {Link} from 'react-router-dom'
export default function Nav() {
    return (//it is jsx area also known as javascript xml which allows writing html like code in js
        <div>
            <ul className='nav-ul'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add'>Add Product</Link></li>
                <li><Link to='/update'>Update Product</Link></li>
                <li><Link to='/logout'>Log Out</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>
            </ul>
        </div>
    );
}
