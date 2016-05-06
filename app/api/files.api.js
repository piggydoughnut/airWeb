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

export function getGallery(page = 1) {
    var params = page ? '?page=' + page : '';
    return get(Config.server + "/files/gallery" + params, 'eb03c4c06d42e445655dda71fb89c0675d13bda3a95769ba0466867a42e9d197');
}

export function getGalleryForUser(data) {
    var params = data.page ? '?page=' + data.page : '';
    return get(Config.server+ "/files/gallery/user/" + data.id + params, 'eb03c4c06d42e445655dda71fb89c0675d13bda3a95769ba0466867a42e9d197');
}

export function addToGallery(data) {
    return post(Config.server + '/files/gallery/user', 'eb03c4c06d42e445655dda71fb89c0675d13bda3a95769ba0466867a42e9d197', data);
}
