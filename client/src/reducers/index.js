import {  CREATE_ACTIVITIES, DB_COUNTRIES_GET, GET_COUNTRIES, GET_COUNTRIES_BY_ID, QUIT_COUNTRIES_BY_ID } from "../actions";

const initialState={

    countries: [],
    country: [],
    dbCountries: []
   
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload
            }
        case GET_COUNTRIES_BY_ID:
            return {
                ...state, 
                country: action.payload
            } 
        case QUIT_COUNTRIES_BY_ID:
            return {
                ...state,
                country: action.payload
            }      
        case DB_COUNTRIES_GET:
            return {
                ...state,
                dbCountries: action.payload
            } 
        case CREATE_ACTIVITIES:
            return{
            }      
            
    
        default: return state
    }
    
}