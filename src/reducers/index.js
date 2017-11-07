import { combineReducers } from 'redux';

import pagination from './pagination';
import activePicture from './activePicture';
import authors from './authors';
import filters from './filters';

export default combineReducers({
    pagination,
    activePicture,
    authors,
    filters
})