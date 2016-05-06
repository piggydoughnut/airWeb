/** Actions */
export const GET_STATS_COUNTRIES = 'GET STATS COUNTRIES';
export const GET_STATS_COUNTRIES_SUCCESS = 'GET STATS COUNTRIES SUCCESS';
export const GET_STATS_COUNTRIES_FAILURE = 'GET STATS COUNTRIES FAILURE';
export const GET_STATS_CITIES = 'GET STATS CITIES';
export const GET_STATS_CITIES_SUCCESS = 'GET STATS CITIES SUCCESS';
export const GET_STATS_CITIES_FAILURE = 'GET STATS CITIES FAILURE';


/** Action creators */
export function getStatsCountries() {
    return {
        type: GET_STATS_COUNTRIES
    }
}
/** Action creators */
export function getStatsCities() {
    return {
        type: GET_STATS_CITIES
    }
}