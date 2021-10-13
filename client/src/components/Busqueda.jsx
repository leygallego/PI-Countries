import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import fetchCountry from '../actions';
import  './Busqueda.css'

function Busqueda() {
    const dispatch = useDispatch();
    const buscador = useSelector((state) => state.countryName)
    // console.log("buscador", buscador[0][0].name);


    const [countryName, setCountryName] = useState('')

    const handleOnChange = (e) => {
        setCountryName(e.target.value)
    }

    const handleOnClick = ()=>{
        dispatch(fetchCountry(countryName))
    }

    return (
        <div>
            <h1>Este es el componente de BUSQUEDA</h1>

            <label htmlFor="buscar_pais" className="busqueda-label">Buscar País por Nombre</label>
            <input 
            placeholder="Ingresa el nombre del Pais"
            type="text" 
            className="busqueda-input" 
            id="buscar_pais" 
            value={countryName}
            onChange={handleOnChange}
             />
             <div className="container-busquedaButton">
             <button className="busqueda-button" onClick={handleOnClick} >Enviar</button>
             </div>

             <div className="main-resultado">

             { buscador.loading &&  <div className="resultado-warning">Buscando...</div>}
             { buscador.length >= 1 && <div className="resultado-mostrado">
                <img className="busqueda-imagen" src={buscador[0][0].flag} alt={buscador[0][0].name} />
                { buscador.length >= 1 && <div className="resultado-mostrado">
                <h1>{buscador[0][0].name}</h1>
                <h1>{buscador[0][0].id}</h1>
                <h1>{buscador[0][0].continent}</h1>
                <h1>{buscador[0][0].subregion}</h1>
                <h1>{buscador[0][0].area}</h1>
                <h1>{buscador[0][0].population}</h1>

            </div>}
            </div>}



             </div>

        </div>
    )
}

export default Busqueda
