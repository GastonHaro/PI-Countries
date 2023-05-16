import { GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRY } from "./actions-types"

const initialState = {
    countries: [],
    activities: []
}


const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_COUNTRIES: 
            return { 
                ...state, 
                countries: action.payload 
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case GET_COUNTRY:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return { ...state };
    }
}

export default rootReducer;