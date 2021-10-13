import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav">                
        <NavLink exact to="/home" className="enlace">Home</NavLink>
        <NavLink exact to="/country" className="enlace">Buscar Pais por Nombre</NavLink>
        <NavLink exact to="/crear" className="enlace">Crear Actividades </NavLink>

</div>
    )
}

export default NavBar
