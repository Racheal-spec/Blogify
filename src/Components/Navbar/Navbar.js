import React from 'react';
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import './Navbar.scss';

const Navbar = () => {

    return(
   <div>
      <NavbarDesktop /> 
      <NavbarMobile />
   </div>
    )
}

export default Navbar;