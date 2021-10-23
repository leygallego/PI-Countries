import React from 'react';
import { NavLink } from 'react-router-dom';


function CountriesCard(props) {
    return (
        <div className="imagenes-cardCountries" key={props.id}>
            <NavLink exact to={`/detalle/${props.id}`} >
                <img src={props.flag} alt={props.name} />
                <h1>{props.name}</h1>
                       </NavLink>

        </div>
    )
}

export default CountriesCard
