import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID';
export const QUIT_COUNTRIES_BY_ID = 'QUIT_COUNTRIES_BY_ID';
export const DB_COUNTRIES_GET = 'DB_COUNTRIES_GET';
export const CREATE_ACTIVITIES = 'CREATE_ACTIVITIES';



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

export function createActivities(payload) {
    return async (dispatch)=>{
        dispatch({
            type: CREATE_ACTIVITIES
        });
    await axios.post("http://localhost:3001/activities/add")
    .then((response)=>{
        console.log("Actividad registrada correctamente");
    })
    }
    
    
}