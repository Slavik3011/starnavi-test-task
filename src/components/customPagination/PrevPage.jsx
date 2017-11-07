import React from 'react';
import { connect } from 'react-redux';

import { prevPage } from 'actions';

const PrevPage = ({ currentPage, prevPage }) => {
    const goToPrevPage = e => {
        e.preventDefault();
        if(currentPage == 1) return false;
        prevPage()
    };

    return <a className="prev" href="#" onClick={goToPrevPage}>prev</a>;
};

export default connect( ({ pagination }) => ({
    currentPage: pagination.currentPage
}), {
    prevPage,
})(PrevPage);