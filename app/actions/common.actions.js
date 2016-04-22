export function success(action, data){
    return {
        type: action,
        payload: data
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