import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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

    const [datosMap, setDatosMap] = useState([]);
    setTimeout(() => {
        setDatosMap(selector)
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
    //     console.log('en el switch', e.target.value)
        
        switch (e.target.value) {
            // filtrar ascendentes
            case "1":
                // setBoolean(true)

                selector.sort((a, b) => {
                   if (a.name < b.name) return -1;
                   if (a.name> b.name) return 1;
                   return 0
                })
                setDatosMap(selector.slice(0, 5))
                break;
    //             //filtrar descendentes
                case "2":
                    // setBoolean(true)
                
                    selector.sort((a, b) => {
                        if (a.name < b.name) return 1;
                        if (a.name > b.name) return -1;
                        return 0;
                    });
                    setDatosMap(selector.slice(0, 5))

                    break;  

                    case "3":
                    // setBoolean(true)
                    selector.sort((a, b) => {
                        if (a.population < b.population) return -1;
                        if (a.population > b.population) return 1;
                        return 0;
                    });
                    setDatosMap(selector.slice(0, 5))

                    break
                    case "4":
                        // setBoolean(true)
                        
                        selector.sort((a,b)=>{
                            if(a.population < b.population) return 1;
                            if(a.population > b.population) return -1;
                            return 0
                        })
                        setDatosMap(selector.slice(0, 5))

                        break
    //             case "5":
    //                 setBoolean(true)  
    //                 selector.sort((a, b) => {
    //                     if (a.continent < b.continent) return 1;
    //                     if (a.continent > b.continent) return -1;
    //                     return 0;
    //                 });
    //                break;
    //                case "6":
    //                 setBoolean(true)  
    //                 selector.sort((a, b) => {
    //                     // console.log("mapeo actv",a.activities);
    //                     if (a.activities < b.activities) return 1;
    //                     if (a.activities > b.activities) return -1;
    //                     return 0;
    //                 });
    //                break;
                   
    //                case "7":
    //                 setBoolean(false)  
    //                break;
                
       
            default:
                break;
        }
     }
 
    const handleOnClickActivities = (e) => {
        // console.log("select activities", e.target.value);  
        let valor = [];
        selector.map(el=>{
            // console.log("mapeando actividades", el);
            el.activities.map(elem=>{
                if(elem === e.target.value){
                    valor.push(el)
                }
                console.log("Valor 1",valor);
                return null
            })
            console.log("Valor 2",valor);
            return null
        }) 
        
        setDatosMap(valor.slice(0, 5))
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
                    {/* <option value={5} >Ordenar por Continente</option>
                    <option value={6} >Ordenar por actividad</option>
                    <option value={7} >Mostrar todos los países y buscar por nombre</option> */}

                </select>
                
            </div>
                    <div>
                        <select onChange={(e)=>{handleOnClickActivities(e)}} name="" id="">
                        {
                                    actividades.map((e, i) => {
                                        return <option value={e.id} key={i}>{e.name}</option>
                                    })
                                }


                        </select>
                    </div>

        <div>
            {
                datosMap.map(e =>{
                    return (
                        <CountriesCard
                        img={e.flag}
                        name={e.name}
                        /> 
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
