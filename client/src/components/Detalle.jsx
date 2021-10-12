import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getCountriesById, quitCountriesById } from '../actions';

function Detalle() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const countryDetalle = useSelector(store=> {
        return store.country
    })
    console.log("Selector", countryDetalle);
    useEffect(()=>{
        dispatch(getCountriesById(id));
        return ()=>{dispatch(quitCountriesById())}
    },[dispatch, id])

    return (
        <div>
            <h1>Este es el componente de Detalle</h1>
            {
                countryDetalle.name ?
                <div>
                    <h1>Detalle de {countryDetalle.name}</h1>
                    <img src={countryDetalle.flag} alt={`imagen de ${countryDetalle.name}`} />
                    <p>Código de país {countryDetalle.id}</p>
                    <p>Capital {countryDetalle.capital}</p>
                    <p>Subregión {countryDetalle.subregion}</p>
                    <p>Área Km cuadrados {countryDetalle.area}</p>
                    <p>Población {countryDetalle.population}</p>
                    {/* <p>{countryDetalle.activities}</p> */}



                </div> : <h3>Cargando...</h3>
            }
        </div>
    )
}

export default Detalle
