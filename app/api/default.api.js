var React = require('react');

export function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        errorModal(response);
    }
}

export function errorModal(error) {
    console.log(error);
    React.AlertIOS.alert(
        'Error',
        'There seems to be an issue connecting to the network. Please try again later. If it repeats please contact support.'
    );
}

export function checkResponseStatus(response) {
    if (response.error !== undefined) {
        throw response.error;
    }
    if (response.status == 403) {
        throw 'Invalid credentials'
    }
    if (response.status == 401) {
        throw 'Unathorised';
    }
}

export function get(url, token){
    return request(url, 'GET', token);
}

export function post(url, token, data){
    return request(url, 'POST', token, data);
}

export function request(url, method, token, data){
    var request_body = {
        method: method,
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };
    if(data && data !== undefined){
        request_body.body = JSON.stringify(data);
    }

    return fetch(url, request_body)
        .then((response) => {
            console.log(response);
            if (response.status >= 400) {
                return {
                    status: response.status
                }
            }
            return response.json();
        })
        .then((responseData) => {
            return responseData;
        })
        .catch((err) => {
            return {
                error: 'Network request failed'
            }
        });
}


