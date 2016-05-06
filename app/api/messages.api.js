/** API Calls to /messages */
var config = require('../config/config');
import {get, post} from "./default.api";

export function loadMessagesForUser(id) {
    return get(config.domain + "/messages/user/" + id, 'eb03c4c06d42e445655dda71fb89c0675d13bda3a95769ba0466867a42e9d197' );
}
