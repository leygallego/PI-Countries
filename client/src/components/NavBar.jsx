import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav">
           
                
        <NavLink exact to="/home" className="enlace">Home</NavLink>

    

</div>
    )
}

export default NavBar
