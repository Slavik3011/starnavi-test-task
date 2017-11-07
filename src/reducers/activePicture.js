export default (state = -1, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_PICTURE':
            if(state == action.payload) {
                state = -1;
            } else {
                state = action.payload;
            }
            break;
    }

    return state;
}