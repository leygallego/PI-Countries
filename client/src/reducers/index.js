import { SET_FILTERS, GET_ACTIVITIES, FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAILURE, CREATE_ACTIVITIES, DB_COUNTRIES_GET, GET_COUNTRIES, GET_COUNTRIES_BY_ID, QUIT_COUNTRIES_BY_ID } from "../actions";

const initialState={

    countries: [],
    country: [],
    dbCountries: [],
    countryName: [],
    loading: false,
    error: '', 
    activities: []  
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
            return {
                ...state
            }

         case FETCH_COUNTRY_REQUEST:
         return {
             ...state,
             loading: true
         }
         case FETCH_COUNTRY_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 countryName: action.payload,
                 error: ''
             }
         case FETCH_COUNTRY_FAILURE:
             return{
                 ...state,
                 loading: false,
                 countryName: [],
                 error: action.payload
             } 
         case GET_ACTIVITIES:
             return {
                 ...state,
                 activities: action.payload
             }  
             case SET_FILTERS:
                return {
                    ...state, 
                    dbCountries: action.payload
                }      
                 
        default: return state
    }
    
}