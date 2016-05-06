import {GET_STATS_COUNTRIES_SUCCESS, GET_STATS_COUNTRIES_FAILURE, GET_STATS_CITIES_SUCCESS, GET_STATS_CITIES_FAILURE} from "../actions/stats.actions";
// initial state for login is empty user details
const stats = (state = [], action) => {
    switch (action.type) {
        case GET_STATS_COUNTRIES_SUCCESS:
            return {
                countries: action.payload
            };
        case GET_STATS_CITIES_SUCCESS:
            return {
                cities: action.payload
            };
        case GET_STATS_COUNTRIES_FAILURE:
            return action.payload;
        case GET_STATS_CITIES_FAILURE:
            return action.payload;
        default:
            return state;
    }
};

export default stats;
