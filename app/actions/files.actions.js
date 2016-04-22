/** Actions */
export const FILES_POST = 'FILES POST';
export const FILES_POST_SUCCESS = 'FILES POST SUCCESS';
export const FILES_POST_FAILURE = 'FILES POST FAILURE';
export const GET_GALLERY = 'GALLERY GET';
export const GET_GALLERY_SUCCESS = 'GALLERY GET SUCCESS';
export const GET_GALLERY_FAILURE = 'GALLERY GET FAILURE';


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