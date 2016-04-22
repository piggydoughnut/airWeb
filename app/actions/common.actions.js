export function success(action){
    return {
        type: action,
    };
}

export function failure(error, action){
    return {
        type: action,
        payload: {
            error: error
        }
    };
}