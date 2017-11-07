import React from 'react';

export default ({ filter, activeFilter, filterFunc }) => {
    const handleFilter = () => {
        filterFunc(filter);
    };

    return (
        <li onClick={handleFilter} className={activeFilter == filter ? 'active' : ''}>
            {filter}
        </li>
    )
}
