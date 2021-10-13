import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { createActivities, dbCountriesGet } from '../actions';
import './Crear.css';

function Crear() {

    const paises = useSelector(state => {
        return state.dbCountries
    })
    const dispatch = useDispatch();

    // console.log("Selector", paises);

    useEffect(() => {
        dispatch(dbCountriesGet())
    },[dispatch])

    const [values, setValues] = useState({
        name: "",
        difficulty: 0,
        duration: "",
        season: "",
        countries: []
    });

    const handleOnChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        dispatch(createActivities(values));
        setValues({
            name: "",
        difficulty: 0,
        duration: "",
        season: "",
        countries: []

        })
    }

    const handleOnChangeSelect = (e)=>{
        if(values.countries.includes(e.target.value)){
         setValues({
             ...values,
             countries: values.countries.filter(ep=> ep !== e.target.value)
         })
        }else{
            setValues({
                ...values,
                countries: [...values.countries, e.target.value]
            })
        }
         
     }



    return (
        <div>
            <h1 className="logo">Crea <span>Actividades</span> y asocialas al país que corresponda</h1>

                <div className="crear-wraper">
                    <div className="crear-form">
                        <form onSubmit={onSubmit}>
                            <label >Nombre </label>
                            <input className="crear-inputNombre" name="name" value={values.name} onChange={handleOnChange}
                            placeholder="Escribe el nombre de la actividad"  />
                            <label >Dificultad (de 1 a 5) </label>
                            <input className="crear-inputNombre" name="difficulty" value={values.difficulty} onChange={handleOnChange}
                            placeholder="nivel de dificultad (de 1 a 5)"  />
                            <label >Duración </label>
                            <input className="crear-inputNombre" name="duration" value={values.duration} onChange={handleOnChange}
                            placeholder="Duración de la actividad (Días)"  />
                            <label >Temporada </label>
                            <input className="crear-inputNombre" name="season" value={values.season} onChange={handleOnChange}
                            placeholder="Temporada (Verano, otoño, invierno o primavera)"  />
                        </form>
                        <div className="select-crear">
                        <select onChange={handleOnChangeSelect} name="countries" multiple>
                            {
                                 paises.map((e, i)=>{
                                    return <option value={e.id} key={i}>{e.name}</option>
                                })
                            }
                        </select>
                        
                        </div>
                     
                            <button className="myButton-crear" type="submit" >CREAR</button>

                    </div>
                </div>

        </div>
    )
}

export default Crear
