/** API Calls to /messages */
var config = require('../config/config');
import {get, post} from "./default.api";

export function loadMessagesForUser(data) {

    return get(config.domain + "/messages/user/" + data.id, data.token );
}
