/** Actions */
export const FILES_POST = 'FILES POST';
export const FILES_POST_SUCCESS = 'FILES POST SUCCESS';
export const FILES_POST_FAILURE = 'FILES POST FAILURE';


/** Action creators */
export function uploadFiles(filename, files, id) {
    return {
        type: FILES_POST,
        payload: {
            filename: filename,
            files: files,
            user_id : id
        }
    };
}