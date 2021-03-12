import React from 'react';
import{Link} from 'react-router-dom';
import './Navbar.scss';

const NavbarDesktop = () => {

    return(
<div className="nav">
 <div className="logo">
     <h1>Blogify</h1>
 </div>
 <div className="navlinks">
     <Link to='/' className="links">
       <li>Home</li>
     </Link>
     <Link to='/about' className="links">
         <li>About</li>
     </Link>
     <Link to='/create' className="links" id="create-link">
         <li>Create New Blog</li>
     </Link>
 </div>
 
 </div>
    )
}

export default NavbarDesktop;