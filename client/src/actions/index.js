import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID'
export const QUIT_COUNTRIES_BY_ID = 'QUIT_COUNTRIES_BY_ID'



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