/** Actions */
export const FILES_POST = 'FILES POST';
export const FILES_POST_SUCCESS = 'FILES POST SUCCESS';
export const FILES_POST_FAILURE = 'FILES POST FAILURE';
export const GET_GALLERY = 'GALLERY GET';
export const GET_GALLERY_SUCCESS = 'GALLERY GET SUCCESS';
export const GET_GALLERY_FAILURE = 'GALLERY GET FAILURE';
export const GET_GALLERY_USER = 'GALLERY USER GET';
export const GET_GALLERY_USER_SUCCESS = 'GALLERY USER GET SUCCESS';
export const GET_GALLERY_USER_FAILURE = 'GALLERY USER GET FAILURE';
export const ADD_TO_GALLERY = 'ADD TO GALLERY';
export const ADD_TO_GALLERY_SUCCESS = 'ADD TO GALLERY SUCCESS';
export const ADD_TO_GALLERY_FAILURE = 'ADD TO GALLERY FAILURE';


/** Action creators */
export function uploadFiles(filename, files, id) {
    return {
        type: FILES_POST,
        payload: {
            filename: filename,
            files: files,
            user_id: id
        }
    };
}

export function getGallery(page = 1) {
    return {
        type: GET_GALLERY,
        payload: {
            page: page
        }
    };
}
export function addToGallery(data) {
    return {
        type: ADD_TO_GALLERY,
        payload: data
    };
}

export function getGalleryForUser(user_id, page = 1) {
    return {
        type: GET_GALLERY_USER,
        payload: {
            id: user_id,
            page: page
        }
    };
}