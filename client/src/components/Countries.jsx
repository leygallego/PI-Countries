import React from 'react';
import './Countries.css';
import { NavLink } from 'react-router-dom';


function Countries({countries, loading}) {
    if (loading) {
        return <h2>Loading...</h2>

    }


    return (
        <div className="main-cardCountries">
            <h1>ESTE ES EL COMPONENTE DE PAÍSES</h1>
            <div className="container-countries">
        {
                countries.map(country=>{
                   return <div className="imagenes-cardCountries" key={country.id}>
                       <NavLink exact to={`/detalle/${country.id}`} >
                       <img src={country.flag} alt={country.name} />
                       </NavLink>

                       <div>
                       {country.name}
                       </div>
                       <div>
                           {country.continent}
                       </div>
                    </div>
                })
            }

        </div>
        </div>
    )
}

export default Countries
