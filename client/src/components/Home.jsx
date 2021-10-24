import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../actions';
import CountriesCard from './CountriesCard';
import './Home.css';
// import Pagination from './Pagination';



function Home() {


    const selector = useSelector(state => {
        return state.dbCountries
    })
    // console.log("selector", selector);

    const actividades = useSelector(state => {
        return state.activities
    })
    //  console.log("mapeo activities",actividades);
    const dispatch = useDispatch();

    const limite = 9;
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(limite);
    // const [paginado, setPaginado] = useState([]);
    const [datosMap, setDatosMap] = useState([]);
    const [buleano, setBuleano] = useState(false);
    // const [loading, setLoading] = useState(false)
    // const [currentPage, setCurrentPage] = useState(1);
    // const [countriesPerPage] = useState(9);

    const pagination = () => {
        setDatosMap(
            selector.slice(page, limit)
        )
    }

    const handleBackwards = () => {

        setPage(page - limite)
        setLimit(limit - limite)

        if ((page === 0 || page < 0) && (limit === 0 || limit < 0)) {
            setPage(0);
            setLimit(9);
        }

        console.log(page, limit)
        pagination();
    }

    const handleForewards = () => {

        if (limit < selector.length) {
            setPage(limit)
            setLimit(limit + limite)
        }
        // console.log(page, limit)
        pagination();
    }

    
    setTimeout(() => {
        if (!buleano) {
            setBuleano(true);
            pagination();
        }
    }, 100);


    // const [loading, setLoading] = useState(false)
    // const [currentPage, setCurrentPage] = useState(1);
    // const [countriesPerPage] = useState(9);

    // const [searchTerm, setSearchTerm] = useState("")
    // const [searchResults, setSearchResults] = useState([])
    // const [boolean, setBoolean] = useState(false)
    // const [values, setValues] = useState({
    //     activities: []
    // });
    // // const [busqueda, setBusqueda] = useState()



   

    // const searchHandler = (searchTerm) => {
    //     setSearchTerm(searchTerm)
    //     if (searchTerm !== "") {
    //         const countrySelected = selector.filter((country) => {
    //             return Object.values(country)
    //                 .join(" ")
    //                 .toLowerCase()
    //                 .includes(searchTerm.toLowerCase())
    //         });
    //         setSearchResults(countrySelected)
    //     }
    //     else {
    //         setSearchResults(currentCountries)
    //     }
    // }



     const handleFilterChange = (e)=>{
        
        switch (e.target.value) {
            case "1":

                selector.sort((a, b) => {
                   if (a.name < b.name) return -1;
                   if (a.name> b.name) return 1;
                   return 0
                });
                dispatch(setFilters(selector))
                setDatosMap(selector.slice(0, 9))
                break;
                case "2":                
                    selector.sort((a, b) => {
                        if (a.name < b.name) return 1;
                        if (a.name > b.name) return -1;
                        return 0;
                    });
                    dispatch(setFilters(selector))
                setDatosMap(selector.slice(0, 9))
                    break;  
                    case "3":
                    selector.sort((a, b) => {
                        if (a.population < b.population) return -1;
                        if (a.population > b.population) return 1;
                        return 0;
                    });
                    dispatch(setFilters(selector))
                setDatosMap(selector.slice(0, 9))

                    break
                    case "4":                        
                        selector.sort((a,b)=>{
                            if(a.population < b.population) return 1;
                            if(a.population > b.population) return -1;
                            return 0
                        })
                        dispatch(setFilters(selector))
                setDatosMap(selector.slice(0, 9))

                        break
                        case "5":
                            selector.sort((a,b)=>{
                                if(a.continent < b.continent) return 1;
                                if(a.continent > b.continent) return -1;
                                return 0
                            })
                            dispatch(setFilters(selector))
                    setDatosMap(selector.slice(0, 9))
                            break      
            default:
                break;
        }
     }
 
    const handleOnClickActivities = (e) => {
        // console.log("select activities", e.target.value);  
        let valor = [];
        selector.map(el=>{
            el.activities.map(elem=>{
              
                if(elem.id === e.target.value){
                    valor.push(el)
                }
                return null
            })
            return null
        }) 
        
        setDatosMap(valor)
     }

     const handleOnContinent = (e) => {
      
        let continente = [];
        selector.map(el=>{
            if(el.continent === e.target.value){
                continente.push(el)
            }
            return null
        }) 
        setDatosMap(continente)
     }


    // const indexOfLastCountry = currentPage * countriesPerPage;
    // const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    // const currentCountries = selector.slice(indexOfFirstCountry, indexOfLastCountry)

    // const paginate = pageNumber => setCurrentPage(pageNumber)

    return (

        <div>
            <div className="container-selectCountryCard">
                <select className="select-CountryCard" onChange={e => { handleFilterChange(e) }}>
                    <option value={-1}>Selección de Filtros</option>
                    <option value={"1"} >Ordenar Ascendente</option>
                    <option value={"2"} >Ordenar Descendente</option>
                    <option value={"3"} >Ordenar por población menor a mayor</option>
                    <option value={"4"} >Ordenar por población mayor a menor</option>
                    <option value={"5"} >Ordenar por Continente</option>
                </select>
                
            </div>
            <div className="container-continenteCard">
                <select className="select-continenteCard" onChange={e => { handleOnContinent(e) }}>
                    <option value={-1}>Filtro por continente</option>
                    <option value={"Americas"} >América</option>
                    <option value={"Europe"} >Europa</option>
                    <option value={"Africa"} >África</option>
                    <option value={"Oceania"} >Oceanía</option>
                    <option value={"Asia"} >Asia</option>
                </select>
                
            </div>
            
                    <div className="container-selectActivityCard">
                    <h3>Filtrar por actividad</h3>
                        <select onChange={(e)=>{handleOnClickActivities(e)}} name="" id="">
                        {
                                    actividades.map((e, i) => {
                                        return <option value={e.id} key={i}>{e.name}</option>
                                    })
                                }


                        </select>
                    </div>
                    <div className="myButton-pagination">
                    <input className="pagination-back" type="button" value="<<< Atrás" onClick={handleBackwards} />
                    <input className="pagination-forward" type="button" value="Adelante >>>" onClick={handleForewards} />
                </div>

        <div className="render-countries">
            {
                datosMap.map(e =>{
                    return (
                        <div className="render-countriesCard" >
                            <CountriesCard
                        id={e.id}
                        flag={e.flag}
                        name={e.name}
                        continent={e.continent}
                        /> 
                        </div>
                        
                    )
                })
            }













            {/* 

            <div className="select-actividades">
                            <select  onChange={(e)=> {handleOnClickActivities(e)}} name="activities" >
                                {
                                    actividades.map((e, i) => {
                                        return <option value={e.name} key={i}>{e.name}</option>
                                    })
                                }
                            </select>
                            </div>


            
            { boolean ? 
            
            <Countries
            countries={searchTerm.length < 1 ? currentCountries : searchResults}
            loading={loading}
            term={searchTerm}
            searchKeyWord={searchHandler}
            sort={handleFilterChange}
            /> 
            : 
            
            <Countries
                countries={searchTerm.length < 1 ? currentCountries : searchResults}
                loading={loading}
                term={searchTerm}
                searchKeyWord={searchHandler}
                sort={handleFilterChange}
            /> }
            
            <Pagination
                countriesPerPage={countriesPerPage}
                totalcountries={selector.length}
                paginate={paginate}
            /> */}
        </div>

        </div>
    )
}

export default Home
