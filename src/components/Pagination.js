import React from 'react';
const Pagination = ({current, count, change}) => (
    <footer className="pagination">
        {[...Array(count)].map((item, key) => 
            (<button key={key} disabled={key+1 === current} onClick={()=>{change(key+1)}}>|{key+1}|</button>))}
    </footer>
);

export default Pagination;