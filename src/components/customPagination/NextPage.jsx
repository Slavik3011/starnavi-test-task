import React from 'react';
import { connect } from 'react-redux';

import { nextPage } from 'actions';


const NextPage = ({ currentPage, maxPage, nextPage }) => {
    const goToNextPage = e => {
        e.preventDefault();
        if(currentPage == maxPage) return false;
        nextPage();
    };

    return <a className="next" href="#" onClick={goToNextPage}>next</a>;
};

export default connect( ({ pagination }) => ({
    currentPage: pagination.currentPage,
    maxPage: pagination.maxPage
}), {
    nextPage
} )(NextPage);