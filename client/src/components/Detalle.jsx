import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getCountriesById, quitCountriesById } from '../actions';
import './Detalle.css';

function Detalle() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const countryDetalle = useSelector(store=> {
        return store.country
    })
    // console.log("Selector", countryDetalle);
    useEffect(()=>{
        dispatch(getCountriesById(id));
        return ()=>{dispatch(quitCountriesById())}
    },[dispatch, id])

    return (
        <div className="main-cardDetail">

            
            {
                
                countryDetalle.name ?
                <div className="container-detail">
                    <div className="container-basicDetail">
                    <h1>Detalle de <span>{countryDetalle.name}</span> </h1>
                    <img src={countryDetalle.flag} alt={`imagen de ${countryDetalle.name}`} />
                    <p>Código de país <span>{countryDetalle.id}</span> </p>
                    </div>

                    <div className="container-especificDetail">
                    <p>Capital <span>{countryDetalle.capital}</span> </p>
                    <p>Subregión <span>{countryDetalle.subregion}</span> </p>
                    <p>Área Km cuadrados <span>{countryDetalle.area}</span> </p>
                    <p>Población <span>{countryDetalle.population}</span> </p>
                    <p>Continente <span>{countryDetalle.continent}</span> </p>
                    </div>
                    

                    <div className="container-activitiesDetail">{countryDetalle.activities.map((e, index)=>{
                        return (
                            <div className="detalles" key={index} >
                                <h2>Actividades</h2>
                                <p>Nombre actividad:<span>{e.name}</span> </p>
                                <p>Duración: <span>{e.duration}</span> </p>
                                <p>Dificultad (de 1 a 5): <span>{e.difficulty}</span> </p>
                                <p>Temporada: <span>{e.season}</span> </p>
                            </div>
                        )
                    })}</div>

                </div> : <h3>Cargando...</h3>
            }
        </div>
    )
}

export default Detalle
