import React from 'react';

const Filter = (props) => {
  return (
    <div className='Filter'>
      <select name="filter" onChange={(e) => props.onCategoryChange(e)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};

export default Filter;
