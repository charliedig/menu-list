import React, { Component } from 'react';
import CartItem from './cartitem';

class FoodHolder extends Component {

  render() {
    return (
        this.props.cartItems.map((cartitem) => (
            <CartItem removeItem={this.props.removeItem} cartitem={cartitem}/>
          ))
      )  
  }
}


export default FoodHolder;
