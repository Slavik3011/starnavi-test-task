import React from 'react';
import { connect } from 'react-redux'

import PaginationLink from './PaginationLink';
import PrevPage from './PrevPage';
import NextPage from './NextPage';
import ChoosePage from './ChoosePage';
import PostsOnPage from './PostsOnPage';

import './customPagination.sass';

const CustomPagination = ({ currentPage, maxPage }) => {
    const pagLinks = () => {
        let startLink = currentPage - 3,
            lastLink = currentPage + 3,
            links = [];

        if(startLink < 1) startLink = 1;
        if(lastLink > maxPage) lastLink = maxPage;

        for(let i = startLink; i <= lastLink; i++ ) {
            links.push(<PaginationLink key={i} page={i}/>)
        }

        return links;
    };

    return (
        <div className="pagination-container">
            <ChoosePage />
            <ul className="custom-pagination">
                <li>
                    <PrevPage />
                </li>
                {pagLinks()}
                <li>
                    <NextPage />
                </li>
            </ul>
            <PostsOnPage />
        </div>
    )
};

export default connect( ({ pagination }) => ({
    currentPage: pagination.currentPage,
    maxPage: pagination.maxPage
}) )(CustomPagination)