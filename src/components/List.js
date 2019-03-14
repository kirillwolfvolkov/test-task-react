import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ list = [], title }) => (
    <React.Fragment>
        <header>
            <h2>{title}</h2>
        </header>
        <ul>
            {list.map(item=><li key={item.id}><Item name={item.name} region={item.region} year={item.year} /></li>)}
        </ul>

    </React.Fragment>
);

List.propTypes = {
    list: PropTypes.array.isRequired
};

export default List;