import React, { Component } from 'react';

class CartTotal extends Component {


  render() {
    return (
        <div>
            <p>Your Total : ${this.props.cartTotal}</p>
        </div>
    );
  }
}



export default CartTotal;
