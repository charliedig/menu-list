import React, { Component } from 'react';
import SearchBar from './search/searchbar';
import OuterMenu from './menu/outerMenu';
import FoodCart from './cart/foodcart';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

class RestrauntMenuDashboard extends Component {

  state = {
    menuCart: []
  }

  addingItem = (foodItem) => {
    this.setState(
      {
        menuCart: [...this.state.menuCart, foodItem]
      }, function () {
        console.log(this.state.menuCart);
      }
    );
  }

  
  render() {


    return (

      <Router>

        <div className="MenuList" style={{margin: '0 auto', maxWidth: '1920px'}}>

          <span>ShangHai HighTea House</span>
          <div>
            <Link to="/">HOME</Link> | 
            <Link to="/foodCart">CART</Link>
          </div>
          <Route exact path="/" render={props => (
            <div>
              <SearchBar/>
              <OuterMenu addingItem={this.addingItem} menuitems={menuitems} />
            </div>
          )}/>

          <Route exact path="/foodCart" render={props => (
            <div>
                <h1>Items in your Cart</h1>
                <FoodCart foodincart={this.state.menuCart}/>
            </div>
          )}/>

        </div>

      </Router>

    );
  }
}

const menuitems = [
  {category: "Appetizers", price: "$49.99", stocked: false, name: "Egg Roll"},
  {category: "Appetizers", price: "$9.99", stocked: true, name: "Crab Ragoon"},
  {category: "Rice and Noodles", price: "$29.99", stocked: true, name: "Fried Rice"},
  {category: "Beef Dishes", price: "$99.99", stocked: true, name: "Wagyu A5 Steak"},
  {category: "Chicken Dishes", price: "$399.99", stocked: true, name: "Fried Chicken"},
  {category: "Chicken Dishes", price: "$399.99", stocked: true, name: "Chicken and Waffles"},
  {category: "Seafood", price: "$199.99", stocked: false, name: "New England Lobster Tail"}
];

export default RestrauntMenuDashboard;
