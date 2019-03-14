import React, {Fragment} from 'react';

const Item = ({name, region, year}) =>(
    <Fragment>
        <span>{name}</span>
        <span>{year}</span>|
        <span>{region}</span>
    </Fragment>
);

Item.defaultProps = {
    name: "default",
    year: 1,
    region: "default",
};

export default Item;