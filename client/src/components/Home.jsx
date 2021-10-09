import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions';
import Countries from './Countries';
import './Home.css';


function Home() {

    const selector = useSelector (state=> {
        return state.countries
    })
    console.log(selector);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])


    return (
        <div>
        <h1>ESTE ES EL HOME</h1>
        <Countries countries={selector}/>
    </div>
    )
}

export default Home
