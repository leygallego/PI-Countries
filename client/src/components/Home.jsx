import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions';
import Countries from './Countries';
import './Home.css';
import Pagination from './Pagination';


function Home() {

    const selector = useSelector (state=> {
        return state.countries
    })
    // console.log(selector);

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(9);

    useEffect(()=>{
        setLoading(true)
        dispatch(getCountries())
        setLoading(false)
    },[dispatch])

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = selector.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginate = pageNumber=> setCurrentPage(pageNumber)

    return (
        <div>
        <h1>ESTE ES EL HOME</h1>
        <Countries countries={currentCountries} loading={loading} />
        <Pagination 
            countriesPerPage={countriesPerPage}
            totalcountries={selector.length}
            paginate={paginate}
        />
    </div>
    )
}

export default Home
