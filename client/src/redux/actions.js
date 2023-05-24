import { 
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_COUNTRY,
    CLEAN_DETAIL,
    COUNTRY_BY_NAME,
    CONTINENT_FILTER,
    ORDER_POPULATION,
    ORDER_ALPHABETIC,
    POST_ACTIVITIES,
    ACTIVITIES_FILTER
    } from './actions-types'

import axios from "axios"

const URL = 'http://localhost:3001/countries';

export const getCountries = () => {

    return async (dispatch) => {
        try {
            const apiData = await axios.get(URL);
            const countries = apiData.data;
            dispatch({
                type: GET_COUNTRIES,
                payload: countries
            })
        } catch (error) {
            return {error: error.message}
        }
    }
}

export const getCountry = (id) => {
    return async (dispatch) => {
        try {
            const apiData = await axios.get(`${URL}/${id}`)
            const country = apiData.data;
            dispatch({
                type: GET_COUNTRY,
                payload: country
            })
        } catch (error) {
            return error.message
        }
    }
}

export const getCountryByName = (name) => {
    return async (dispatch) => {
        try {
            const apiData = await axios.get(`${URL}?name=${name}`)
            const country = apiData.data
            dispatch({
                type: COUNTRY_BY_NAME,
                payload: country,
                
            })
        } catch (error) {
            return error.message
        }
    }
}

export const orderPopulation = (order) => {
    return { 
        type: ORDER_POPULATION,
        payload: order
    }
}

export const orderAlphabetic = (order) => {
    return {
        type: ORDER_ALPHABETIC,
        payload: order
    }
}

export const pagedCountries = () => {
    return {
        
    }
}


export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}

export const continentFilter = (continent) => {
    return  {
        type: CONTINENT_FILTER,
        payload: continent
    }
} 

export const activitiesFilter = (response) => {
    return {
        type: ACTIVITIES_FILTER,
        payload: response
    }
}

/////////////////// ACTIVITIES ////////////////////

export const getActivities = () => {
    const endpoint = 'http://localhost:3001/activities'

    return async (dispatch) => {
        try {
            const apiData = await axios.get(endpoint);
            const activities = apiData.data;
            dispatch({
                type: GET_ACTIVITIES,
                payload: activities
            })
        } catch (error) {
            return { error:error.message }
        }
    }
}

export const postActivities = (state) => {
    return (dispatch) => {
            axios.post('http://localhost:3001/activities', state)
            .then(res=>alert('Successfully created activity'))
            dispatch({
                type: POST_ACTIVITIES,
            })
    }
}
