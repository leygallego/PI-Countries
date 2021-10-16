import React, {useRef} from 'react';
import './Countries.css';
import { NavLink } from 'react-router-dom';


function Countries({countries, loading, term, searchKeyWord}) {
    const inputEl = useRef("")

    if (loading) {
        return <h2>Loading...</h2>

    }

    const getSearchTerm = () => {
        searchKeyWord(inputEl.current.value);
    }

  

    return (
        <div className="main-cardCountries">

            <div className="busqueda-countries">
                <input 
                ref={inputEl}
                type="text" 
                placeholder="Busca un país"
                value={term}
                onChange={getSearchTerm}
                />
            </div>
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
