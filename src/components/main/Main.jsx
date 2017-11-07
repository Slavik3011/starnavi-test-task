import React from 'react';
import Pagination from 'react-bootstrap/lib/Pagination';
import { connect } from 'react-redux';

import Gallery from '../gallery/Gallery';
import CustomPagination from '../customPagination/CustomPagination';
import { toPage } from 'actions';


import './main.sass';

const Main = ({ maxPage, currentPage, toPage }) => {
    const goToPage = eventKey => toPage(eventKey);

    return (
        <main>
            <CustomPagination />
            <Gallery />
            <Pagination prev next first last items={maxPage} maxButtons={7} activePage={currentPage} onSelect={goToPage}/>
        </main>
    )
}

export default connect( ({ pagination }) => ({
    maxPage: pagination.maxPage,
    currentPage: pagination.currentPage
}), {
    toPage
} )(Main)