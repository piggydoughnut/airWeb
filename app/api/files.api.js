var Config = require("../config/config");
import {get, post} from "./default.api";

export function postObjFileForm(data) {
    console.log('filesApi');
    var fd = new FormData();
    var file = '';
    fd.append('filename', data.filename);
    fd.append('user_id', data.user_id);
    for (file in data.files) {
        fd.append(file, data.files[file]);
    }

    return fetch(Config.server + '/files/form', {
        method: 'POST',
        body: fd
    })
        .then((response) => {
            if (response.status == 400 || response.status == 500) {
                throw 'Whoops! There is a problem with submitting your form.';
            }
            return response.json();
        })
        .then((responseData) => {
            return responseData
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
}

export function getGallery(data) {
    var params = data.page ? '?page=' + data.page : '';
    return get(Config.server + "/files/gallery" + params, data.token);
}

export function getGalleryForUser(data) {
    var params = data.page ? '?page=' + data.page : '';
    return get(Config.server+ "/files/gallery/user/" + data.id + params, data.token);
}

export function addToGallery(data) {
    return post(Config.server + '/files/gallery/user', data.token, data.data);
}
