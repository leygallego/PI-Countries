import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions';
import Countries from './Countries';
import './Home.css';
import Pagination from './Pagination';


function Home() {

    const selector = useSelector(state => {
        return state.countries
    })
    // console.log(selector);

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(9);

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [boolean, setBoolean] = useState(false)
    // const [busqueda, setBusqueda] = useState()



    useEffect(() => {
        setLoading(true)
        dispatch(getCountries())
        setLoading(false)
    }, [dispatch])

    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm)
        if (searchTerm !== "") {
            const countrySelected = selector.filter((country) => {
                return Object.values(country)
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

    const handleSortedChange = (e) => {
        // console.log('en el switch', e.target.value)

        switch (e.target.value) {
            // filtrar ascendentes
            case "1":
                selector.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0
                })
                break;
            //filtrar descendentes
            case "2":

                selector.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                });
                break;


            default:
                break;
        }
    }


    // let busqueda = ()=>{
    //     searchTerm.length < 1 ? currentCountries : searchResults
    // }

    const handleFilterChange = (e)=>{
        // console.log('en el switch', e.target.value)
        
        switch (e.target.value) {
            // filtrar ascendentes
            case "1":
                setBoolean(true)

                selector.sort((a, b) => {
                   if (a.name < b.name) return -1;
                   if (a.name> b.name) return 1;
                   return 0
                })

                break;
                //filtrar descendentes
                case "2":
                    setBoolean(true)
                
                    selector.sort((a, b) => {
                        if (a.name < b.name) return 1;
                        if (a.name > b.name) return -1;
                        return 0;
                    });
                    break;  
                case "3":
                    setBoolean(false)  
                   break;   
               
       
            default:
                break;
        }
    }
 


    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = selector.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div>
                    <br />
                    <br /><br /><br /><br /><br /><br /><br />
            <div className="container-selectCountryCard">
                <select className="select-CountryCard" onChange={e => { handleFilterChange(e) }}>
                    <option value={-1}>Selección de Filtros</option>
                    <option value={1} >Ordenar Ascendente</option>
                    <option value={2} >Ordenar Descendente</option>
                    <option value={3} >Mostrar todos los países y buscar por nombre</option>

                </select>
            </div>
            { boolean ? 
            
            <Countries
            countries={searchTerm.length < 1 ? currentCountries : searchResults}
            loading={loading}
            term={searchTerm}
            searchKeyWord={searchHandler}
            sort={handleSortedChange}
            /> 
            : 
            
            <Countries
                countries={searchTerm.length < 1 ? currentCountries : searchResults}
                loading={loading}
                term={searchTerm}
                searchKeyWord={searchHandler}
                sort={handleSortedChange}
            /> }
            
            <Pagination
                countriesPerPage={countriesPerPage}
                totalcountries={selector.length}
                paginate={paginate}
            />
        </div>
    )
}

export default Home
