import React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import ApplyButton from '../ApplyButton/ApplyButton';

export default class FilterBand extends React.Component {
  render() {
    return (
      <div className="container-filterband">
        <div className="container-filterbtn">
          <FilterButton/>
          <FilterButton/>
          <FilterButton/>
        </div>
        <div className="container-applybtn">
          <ApplyButton/>
        </div>
      </div>
    )
  }
}
