import React, { Component } from 'react';

class CartItem extends Component {


  render() {
    return (
        <div style={{display:'flex'}}>
            <h2 style={{marginRight: '20px', flex:'20'}}>{this.props.cartitem.name}</h2>
            <h2 style={{flex:'20'}}>{this.props.cartitem.price}</h2>
            <button style={{float:'right'}}
            >X</button>
        </div>
    );
  }
}



export default CartItem;
