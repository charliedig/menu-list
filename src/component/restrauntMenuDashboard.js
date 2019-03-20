import React, { Component } from 'react';
import SearchBar from './search/searchbar';
import OuterMenu from './menu/outerMenu';

class RestrauntMenuDashboard extends Component {

  state = {
    menuCart: []
  }


  
  render() {


    return (
      <div className="MenuList" style={{margin: '0 auto', maxWidth: '1920px'}}>
        <span>ShangHai HighTea House</span>
        <SearchBar/>
        <OuterMenu menuitems={menuitems} />
      </div>
    );
  }
}

const menuitems = [
  {category: "Appetizers", price: "$49.99", stocked: true, name: "Egg Roll"},
  {category: "Appetizers", price: "$9.99", stocked: true, name: "Crab Ragoon"},
  {category: "Rice and Noodles", price: "$29.99", stocked: true, name: "Fried Rice"},
  {category: "Beef Dishes", price: "$99.99", stocked: true, name: "Wagyu A5 Steak"},
  {category: "Chicken Dishes", price: "$399.99", stocked: true, name: "Fried Chicken"},
  {category: "Chicken Dishes", price: "$399.99", stocked: true, name: "Chicken and Waffles"},
  {category: "Seafood", price: "$199.99", stocked: true, name: "New England Lobster Tail"}
];

export default RestrauntMenuDashboard;
