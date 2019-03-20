import React, { Component } from 'react';

class MenuHeader extends Component {
  render() {
    return (
      <div className="MenuHeader" style ={{display: 'flex'}}>
        <h2 style={{flex: '12'}} >{this.props.headertitle}</h2>
      </div>
      
    );
  }
}

export default MenuHeader;
