import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    return (
      <div className="MenuItem" style ={{display: 'flex'}}>
        <h6 style={{flex: '20', padding: '5px', textAlign: 'left'}} >Egg Rolls</h6>
        <h6 style={{flex: '8', textAlign: 'left'}} >$3.30</h6>
        <button style={{color: 'blue', cursor: 'pointer', flex: '1', maxWidth:'40px'}}>ADD</button>
      </div>
      
    );
  }
}

export default MenuItem;
