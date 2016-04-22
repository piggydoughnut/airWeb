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

    fetch(Config.domain + '/files', {
        method: 'POST',
        body: fd
    })
        .catch(error => {
            console.log(error);
            throw error;
        });
}
