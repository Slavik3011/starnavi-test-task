import React from 'react';
import { connect } from 'react-redux';

import Filter from '../filter/Filter';
import PostCounter from '../postCounter/PostCounter';

import './sidebar.sass';

import { setAuthor, setSize } from 'actions';

const sizeFilters = ['Large', 'Medium', 'Small'];

const Sidebar = ({ authors, setAuthor, setSize, activeSize, activeAuthor }) => (
    <aside>
        <h2 className="sidebar-title">FILTER BY</h2>
        <Filter name="Size" filters={sizeFilters} filterFunc={setSize} activeFilter={activeSize} />
        <Filter name="Author" filters={authors} filterFunc={setAuthor} activeFilter={activeAuthor} />
        <PostCounter />
    </aside>
)

export default connect( ({ authors, filters }) => ({
    authors,
    activeSize: filters.size,
    activeAuthor: filters.author
}), {
    setAuthor,
    setSize
} )(Sidebar)