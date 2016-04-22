/** API Calls to /messages */
var config = require('../config/config');

export function loadMessagesForUser(id) {
    return fetch(config.domain + "/messages/user/" + id,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            try {
                return response.json();
            } catch (e) {
                console.log('malformed request', response);
                throw ('malformed request');
            }
        })
        .then((responseData) => {
            console.log(responseData);
            return responseData;
        })
        .catch(error => {
            throw error;
        });
}
