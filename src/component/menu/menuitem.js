import React, { Component } from 'react';

class MenuItem extends Component {
  // adding comment to testhfdhd
  itemStockStyle = () => {
    return (
      {
        color: 'blue',
        cursor: this.props.foodItem.stocked ? 'pointer' : 'not-allowed',
        flex: '1',
        maxWidth:'40px',
        pointerEvents: this.props.foodItem.stocked ? 'auto' : 'none'
      }
    )
  }

  onItemAdd = (foodItem) => {
    this.props.addingItem(foodItem);
  }

  render() {
    const {name, price} = this.props.foodItem;

    return (
      <div className="MenuItem" style ={{display: 'flex'}}>
        <h6 style={{flex: '20', padding: '5px', textAlign: 'left'}} >{name}</h6>
        <h6 style={{flex: '8', textAlign: 'left'}} >{price}</h6>
        <button style={this.itemStockStyle()}
        onClick={ () => {this.onItemAdd(this.props.foodItem)}}
        >ADD</button>
      </div>

    );
  }
}



export default MenuItem;
