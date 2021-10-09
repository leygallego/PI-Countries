import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';




export const getCountries = () => {
    return async dispatch => {
        return  await axios.get("http://localhost:3001/countries")
        .then(response => dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        }))
    }
}