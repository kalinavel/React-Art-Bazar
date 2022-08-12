import React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import ApplyButton from '../ApplyButton/ApplyButton';

function FilterBand() {
  
  return (
    <div className="container-filterband">
      <div className="container-filterbtn">
        <FilterButton/>
      </div>
      <div className="container-applybtn">
        <ApplyButton/>
      </div>
    </div>
  )
}

export default FilterBand