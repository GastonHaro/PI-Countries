import { GET_COUNTRIES, GET_ACTIVITIES, GET_COUNTRY } from './actions-types'
import axios from "axios"


export const getCountries = () => {

    return async (dispatch) => {
        try {
            const apiData = await axios.get('http://localhost:3001/countries');
            const countries = apiData.data;
            dispatch({
                type: GET_COUNTRIES,
                payload: countries
            })
        } catch (error) {
            return error.message;
        }
    }
}

export const getCountry = (id) => {
    return async (dispatch) => {
        try {
            const apiData = await axios.get(`http://localhost:3001/countries/${id}`)
            const country = apiData.data;
            dispatch({
                type: GET_COUNTRY,
                payload: country
            })
        } catch (error) {
            
        }
    }
}

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
            return error.message;
        }
    }
}

 