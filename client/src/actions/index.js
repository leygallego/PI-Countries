import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID';
export const QUIT_COUNTRIES_BY_ID = 'QUIT_COUNTRIES_BY_ID';
export const DB_COUNTRIES_GET = 'DB_COUNTRIES_GET';
export const CREATE_ACTIVITIES = 'CREATE_ACTIVITIES';
// export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRY_BY_NAME'
export const FETCH_COUNTRY_REQUEST = 'FETCH_COUNTRY_REQUEST';
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS';
export const FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';




export const getCountries = () => {
    return async dispatch => {
        return  await axios.get("http://localhost:3001/countries")
        .then(response => dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        }))
    }
}

export const getCountriesById = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/countries/one/${id}`)
        .then(response => dispatch(
            {
                type: GET_COUNTRIES_BY_ID,
                payload: response.data
            }
        ))
    }

}

export function quitCountriesById(){
    return {
                type: QUIT_COUNTRIES_BY_ID, 
                payload:{}
             }    
}

export function dbCountriesGet(){
    return function (dispatch) {
        axios.get("http://localhost:3001/countries/db")
        .then(response => dispatch(
            {
                type: DB_COUNTRIES_GET,
                payload: response.data
            }
        ))
    }
}


export function createActivities(payload){
    return async (dispatch)=>{
        dispatch({
            type: CREATE_ACTIVITIES,
        });
        await axios.post('http://localhost:3001/activities/add', payload)
        .then((response)=>{
            console.log("registrado correctamente");
            console.log(response);
        })
    }

}

export function getActivities(){
    return function(dispatch){
        axios.get("http://localhost:3001/activities")
        .then(response => dispatch(
            {
                type: GET_ACTIVITIES,
                payload: response.data
            }
        ))
    }
}

// export function getCountryByName(name) {
//     return async dispatch => {
//         return await axios.get(`http://localhost:3001/countries/search?name=${name}`)
//         .then(response => dispatch({
//             type: GET_COUNTRIES_BY_NAME,
//             payload: response.data
//         }))
//     }
    
// }

export const fetchCountryRequest = ()=>{
    return {
        type: FETCH_COUNTRY_REQUEST
    }
}

export const fetchCountrySuccess = (Country) => {
    return {
        type: FETCH_COUNTRY_SUCCESS,
        payload: Country
    }
}

export const fetchCountryFailure = (error) => {
    return {
        type: FETCH_COUNTRY_FAILURE,
        payload: error
    }
}

 const fetchCountry = (name) => {
    return (dispatch) => {
        dispatch(fetchCountryRequest());
        axios.get(`http://localhost:3001/countries/search?name=${name}`)
        .then(response => {
            dispatch(fetchCountrySuccess([response.data]));
        })
        .catch(error => {
            dispatch(fetchCountryFailure("No se encontró el País", error))
        })

    }
}

export default fetchCountry