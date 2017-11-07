import React from 'react';
import Collapsible from 'react-collapsible';

import FilterItem from './FilterItem';
import './filter.sass'

export default ({ name, filters, filterFunc, activeFilter }) => {
    const generateFilters = () => {
        return filters.map(filter => <FilterItem key={filter} filter={filter} filterFunc={filterFunc} activeFilter={activeFilter} />)
    };

    return (
        <Collapsible trigger={name}>
            <ul>
                {generateFilters()}
            </ul>
        </Collapsible>
    )
}