const loggedReducer =  (state = false, action) => {
    switch(action.type) {
        case 'sign_in':
            return !state;
        case 'sign_out':
            return false;
        default:
            return state;
    }
}

export default loggedReducer;