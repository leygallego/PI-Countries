import React from 'react';
import './Countries.css';

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
                   return <div key={country.id}>

                       <img src={country.flag} alt={country.name} />
                       <div>
                       {country.name}

                       </div>
                    </div>
                })
            }

        </div>
        </div>
    )
}

export default Countries
