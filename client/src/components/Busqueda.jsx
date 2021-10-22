import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import fetchCountry from '../actions';
import  './Busqueda.css'

function Busqueda() {
    const dispatch = useDispatch();
    const buscador = useSelector((state) => state.countryName)
    // console.log("buscador", buscador[0][0]);


    const [countryName, setCountryName] = useState('')

    const handleOnChange = (e) => {
        setCountryName(e.target.value)
    }

    const handleOnClick = ()=>{
        dispatch(fetchCountry(countryName))
    }

    return (
        <div className="main-containerBusqueda">
            <div className="busqueda-contenedor">
                <label htmlFor="buscar_pais" className="busqueda-label">Buscar País por Nombre</label>
                <div className="inputSearchZone">
                    <input 
                    placeholder="Ingresa el nombre del Pais"
                    type="text" 
                    className="busqueda-input" 
                    id="buscar_pais" 
                    value={countryName}
                    onChange={handleOnChange}
                    />
                </div>
                
                <div className="myButton-busquedaExacta">
                <button className="busqueda-button" onClick={handleOnClick} >Enviar</button>
                </div>

            </div>

            

             <div className="main-resultado">

             { buscador.loading &&  <div className="resultado-warning">Buscando...</div>}
             { buscador.length >= 1 && <div className="resultado-mostrado">
                <img className="busqueda-imagen" src={buscador[0][0].flag} alt={buscador[0][0].name} />
                { buscador.length >= 1 && <div className="resultado-mostrado">
                <h1>País: {buscador[0][0].name}</h1>
                <h1>ID: {buscador[0][0].id}</h1>
                <h1>Capital: {buscador[0][0].capital}</h1>
                {/* <h1>Capital: {buscador[0][0].capital.toString()}</h1> */}
                {/* <h1>Capital: {JSON.stringify(buscador[0][0].capital)}</h1> */}
                <h1>Continente: {buscador[0][0].continent}</h1>
                <h1>Subregión: {buscador[0][0].subregion}</h1>
                <h1>Área: {buscador[0][0].area}</h1>
                <h1>Población: {buscador[0][0].population}</h1>
                <div className="container-activitiesBusqueda">{buscador[0][0].activities.map((e, index)=>{
                        return (
                            <div key={index} >
                                <h2>Actividades</h2>
                                <p>Nombre actividad:<span>{e.name}</span> </p>
                                <p>Duración: <span>{e.duration}</span> </p>
                                <p>Dificultad (de 1 a 5): <span>{e.difficulty}</span> </p>
                                <p>Temporada: <span>{e.season}</span> </p>
                            </div>
                        )
                    })}</div>

            </div>}
            </div>}



             </div>

        </div>
    )
}

export default Busqueda
