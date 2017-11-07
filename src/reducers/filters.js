const initialState = {
    author: '',
    size: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_AUTHOR':
            if(state.author == action.payload) {
                state = {...state, author: ''};
            } else {
                state = {...state, author: action.payload};
            }
            break;

        case 'SET_SIZE':
            if(state.size == action.payload) {
                state = {...state, size: ''}
            } else {
                state = {...state, size: action.payload};
            }
            break;
    }

    return state;
}