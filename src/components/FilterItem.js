import React, {Fragment} from 'react';

const Filter = ({title, value="", change}) => (
    <Fragment>
        <label>
            {title}: 
            <input type="text" value={value} onChange={change} />
        </label>
    </Fragment>
);

export default Filter;