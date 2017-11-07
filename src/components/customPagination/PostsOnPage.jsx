import React from 'react';
import { connect } from 'react-redux'

import { setShowPosts, setMaxPage, toPage } from 'actions';


const PostsOnPage = ({ showPosts, countPosts, currentPage, setShowPosts, toPage, setMaxPage }) => {
    const setPosts = e => {
        let posts = +e.target.value,
            newMaxPage = Math.ceil(countPosts/posts);

        if(newMaxPage < currentPage) {
            toPage(newMaxPage);
        }

        setMaxPage(newMaxPage);
        setShowPosts(posts);
    };

    return (
        <select defaultValue={showPosts} onChange={setPosts}>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
        </select>
    )
};

export default connect( ({ pagination }) => ({
    showPosts: pagination.showPosts,
    countPosts: pagination.countPosts,
    currentPage : pagination.currentPage
}), {
    setShowPosts,
    setMaxPage,
    toPage
} )(PostsOnPage)