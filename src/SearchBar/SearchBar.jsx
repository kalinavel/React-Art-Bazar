import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar">
          <label>search<input className="input is-rounded input is-medium" type="text" placeholder="Rounded input"></input></label>
      </div>
    )
  }
}
