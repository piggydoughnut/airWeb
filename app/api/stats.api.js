/** API Calls to /messages */
var config = require('../config/config');
import {post, get} from "./default.api";

export function getStatsCountries() {
    return get(config.domain + '/stats/countries', null);
}

export function getStatsCities() {
    return get(config.domain + '/stats/cities', null);
}
