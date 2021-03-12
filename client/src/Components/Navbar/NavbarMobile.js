import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
import menu from '../../images/icons8-menu.svg';
import cancel from '../../images/icons8-cancel.svg';

const NavbarMobile = () => {

const[click, setClick] = useState(false);
const handleClick = () =>{
    setClick(!click);
}

    return(
       <div className="navbar-mobile"onClick={handleClick} >
<div className="menu-mobile" >
<div className="logo">
     <h1>Blogify</h1>
 </div>
 <div className='menu' >
 <img src={click? cancel : menu } className="menu-icon" alt="hamburger menu" />
 {click && (
     <ul className="navlist-mobile">
     <Link to='/' className="links">
           <li className="navlinks-mobile">Home</li>
         </Link>
         <Link to='/About' className="links">
             <li className="navlinks-mobile">About</li>
         </Link>
         <Link to='/Create' className="links" id="create-link">
             <li className="navlinks-mobile">Create New Blog</li>
         </Link>
     </ul>
 )}
 </div>
</div>
 
       </div>
    )
}

export default NavbarMobile;