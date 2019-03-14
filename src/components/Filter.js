import React from 'react';
import FilterItem from './FilterItem';

const Filter = ({filter, change}) => (
    <section className="filter">
        <FilterItem
            title="name"
            value={filter.name}
            change={(e)=>{change(e.target.value, "name")}}
         />
        <FilterItem
            title="year"
            value={filter.year}
            change={(e)=>{change(e.target.value, "year")}}
         />
        <FilterItem
            title="country"
            value={filter.country}
            change={(e)=>{change(e.target.value, "country")}}
         />
    </section>
);

export default Filter;