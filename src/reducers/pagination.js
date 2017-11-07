const initialState = {
    currentPage: 1,
    maxPage: 1,
    showPosts: 20,
    countPosts: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            state = {...state, currentPage: state.currentPage + 1};
            break;

        case 'PREV_PAGE':
            state = {...state, currentPage: state.currentPage - 1};
            break;

        case 'GO_TO_PAGE':
            state = {...state, currentPage: action.payload};
            break;

        case 'SET_MAX_PAGE':
            state = {...state, maxPage: action.payload};
            break;

        case 'COUNT_POSTS':
            state = {...state, countPosts: action.payload};
            break;

        case 'SHOW_POSTS':
            state = {...state, showPosts: action.payload};
            break;
    }

    return state;
}