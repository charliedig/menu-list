import React, { Component } from 'react';

class FoodCart extends Component {


  render() {
    return (
        this.props.foodincart.map((food) => (
            <div>
                <h3>{food.name}</h3>
                <h3>{food.price}</h3>
            </div>
          ))
    );
  }
}



export default FoodCart;
