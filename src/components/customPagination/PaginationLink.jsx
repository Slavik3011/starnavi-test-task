import React from 'react';
import { connect } from 'react-redux';

import './paginationLink.sass';

import { nextPage, prevPage, toPage, showPosts, maxPage } from 'actions';

const PaginationLink = ({ page, currentPage, toPage }) => {
    const goToPage = () => toPage(page);

    return <li onClick={goToPage} className={`pagination-link ${page == currentPage ? 'active' : ''}`}>{page}</li>;
};

export default connect( ({ pagination }) => ({
    currentPage: pagination.currentPage
}), {
    toPage
} )(PaginationLink);