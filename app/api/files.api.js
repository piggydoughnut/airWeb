var Config = require("../config/config");
import {get, post} from "./default.api";

export function postObjFileForm(data) {
    var fd = new FormData();
    var file = '';
    fd.append('filename', data.filename);
    fd.append('user_id', data.user_id);
    for (file in data.files) {
        fd.append(file, data.files[file]);
    }
    return post(Config.server + '/files/form', data.token, fd);
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
    return post(Config.server + '/files/gallery/user', data.token, JSON.stringify(data.data), false);
}
