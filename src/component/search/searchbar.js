import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
      <form style ={{display: 'flex'}}>
        <input
          type="text"
          name="menuitem"
          style={{flex: '10', padding: '5px'}}
          placeholder="Search Menu ..."
        />
      </form>
      </div>
    );
  }
}

export default SearchBar;
