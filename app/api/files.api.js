var Config = require("../config/config");

export function postObjFileForm(data) {
    console.log('filesApi');
    var fd = new FormData();
    var file = '';
    fd.append('filename', data.filename);
    fd.append('user_id', data.user_id);
    for (file in data.files) {
        fd.append(file, data.files[file]);
    }

    fetch(Config.server + '/files/form', {
        method: 'POST',
        body: fd
    })
        .catch(error => {
            console.log(error);
            throw error;
        });
}

export function getGallery(page = 1) {
    var params = page ? '?page=' + page : '';
    return fetch(Config.server + "/files/gallery" + params,
        {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
            return responseData
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
}
export function getGalleryForUser(data) {
    console.log(data.id);
    var params = data.page ? '?page=' + data.page : '';
    return fetch(Config.server + "/files/gallery/user/" + data.id + params,
        {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
            return responseData
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
}

export function addToGallery(data) {
    return fetch(Config.server + '/files/gallery/user', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            return responseData;
        })
        .catch(error => {
            console.log(error);
            throw error;
        })
}
