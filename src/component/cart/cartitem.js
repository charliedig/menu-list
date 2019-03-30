import React, { Component } from 'react';

class CartItem extends Component {

removeItem = (itemName) => {
  this.props.removeItem(itemName);
}

  render() {
    return (
        <div style={{display:'flex'}}>
            <h2 style={{marginRight: '20px', flex:'20'}}>{this.props.cartitem.name}</h2>
            <h2 style={{flex:'20'}}>{this.props.cartitem.price}</h2>
            <button style={{float:'right'}}
            onClick={() => this.removeItem(this.props.cartitem)}
            >X</button>
        </div>
    );
  }
}



export default CartItem;
