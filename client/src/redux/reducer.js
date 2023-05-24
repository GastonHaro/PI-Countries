import { 
    CLEAN_DETAIL,
    GET_ACTIVITIES,
    GET_COUNTRIES,
    GET_COUNTRY,
    COUNTRY_BY_NAME,
    CLEAN_COUNTRY,
    CONTINENT_FILTER,
    ORDER_POPULATION,
    ORDER_ALPHABETIC,
    POST_ACTIVITIES,
    ACTIVITIES_FILTER
         } from "./actions-types"

const initialState = {
    countries: [],
    allCountries: [],
    countryDetail: {},
    country: [],
    activities: [],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type){
            case GET_COUNTRIES: 
                return { 
                    ...state, 
                    countries: action.payload,
                    allCountries: action.payload
            }
            case GET_COUNTRY:
                return {
                    ...state,
                    countryDetail: action.payload
            }
            case CLEAN_DETAIL:
                return {
                    ...state,
                    countryDetail: {}
                }
            case COUNTRY_BY_NAME:
                return {
                    ...state,
                    country: action.payload,
                    }
            case ACTIVITIES_FILTER:
                const copyCountries = [...state.allCountries];
                if(action.payload === 'All') 
                return {
                    ...state,
                    countries: copyCountries
                }
                const filteredCountries = action.payload === 'Without'
                ? copyCountries.filter(country => country.activities.length === 0)
                : copyCountries.filter(country => country.activities.length !== 0)
                return {
                    ...state,
                    countries: filteredCountries
                }
            case CONTINENT_FILTER:
                const allCountries = [...state.allCountries];
                const countriesFiltered = action.payload === 'All'
                ? allCountries 
                : allCountries.filter(country => country.continent === action.payload)
                return {
                    ...state,
                    countries: countriesFiltered
                }
            case ORDER_POPULATION:
                const allCountriesCopy = [...state.countries];
                const countriesOrder = action.payload === "+" 
                ? allCountriesCopy.sort((a, b) => a.population - b.population ) 
                : allCountriesCopy.sort((a, b) => b.population - a.population )
                               
                return {
                    ...state,
                    countries:
                        action.payload === "0" 
                        ? state.countries
                        : countriesOrder
                }
            case ORDER_ALPHABETIC:
                const copyAllCountries = [...state.countries];
                const countriesOrderAlph = action.payload === "+" 
                ? copyAllCountries.sort((a, b) => a.name.localeCompare(b.name) ) 
                : copyAllCountries.sort((a, b) => b.name.localeCompare(a.name) )
                               
                return {
                    ...state,
                    countries:
                        action.payload === "0" 
                        ? state.countries
                        : countriesOrderAlph
                }

            case GET_ACTIVITIES:
                return {
                     ...state,
                    activities: action.payload
                    }
            case POST_ACTIVITIES:
                return {
                    ...state
                }

                default:
            return { ...state };
    }
}

export default rootReducer;