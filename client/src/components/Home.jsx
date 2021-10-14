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

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState ([])


    useEffect(()=>{
        setLoading(true)
        dispatch(getCountries())
        setLoading(false)
    },[dispatch])

    const searchHandler = (searchTerm)=>{
        setSearchTerm(searchTerm)
        if (searchTerm !== "") {
            const countrySelected = selector.filter((country)=>{
             return   Object.values(country)
                .join(" ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            });
            setSearchResults(countrySelected)
        }  
        else {
            setSearchResults(currentCountries)
        }   
    }

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = selector.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginate = pageNumber=> setCurrentPage(pageNumber)

    return (
        <div>
        <h1>ESTE ES EL HOME</h1>
        <Countries 
        countries={ searchTerm.length < 1 ? currentCountries : searchResults} 
        loading={loading} 
        term={searchTerm}
        searchKeyWord={searchHandler}
        />
        <Pagination 
            countriesPerPage={countriesPerPage}
            totalcountries={selector.length}
            paginate={paginate}
        />
    </div>
    )
}

export default Home
