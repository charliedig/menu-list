import React, { Component } from 'react';
import FoodHolder from './foodholder';
import CartTotal from './carttotal';
import CartCheckout from './cartcheckout';

class FoodCart extends Component {

  render() {
    return (
      <div>
        <div>
            <FoodHolder removeItem={this.props.removeItem}
            cartItems={this.props.foodincart}/>
        </div>
        <div>
            <CartTotal cartTotal={this.props.cartTotal}/>
            <CartCheckout/>
        </div>
      </div>

      );
  }
}



export default FoodCart;
