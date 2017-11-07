export default (state = [], action) => {
    switch (action.type) {
        case 'SET_AUTHORS':
            state = action.payload
    }

    return state;
}