import React from 'react';
import { NavLink } from 'react-router-dom';
import './CountriesCard.css';



function CountriesCard(props) {
    // console.log(props);
    return (
        <div className="main-cardCountries">
            <div className="container-countries">
                <div className="imagenes-cardCountries" key={props.id}>
                    <NavLink exact to={`/detalle/${props.id}`} >
                        <img src={props.flag} alt={props.name} />
                    </NavLink>
                    <h1>{props.name}</h1>
                    <h2>{props.continent}</h2>
                </div>
            </div>

        </div>

    )
}

export default CountriesCard
