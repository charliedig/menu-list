import React, { Component } from 'react';
import SearchBar from './search/searchbar';
import OuterMenu from './menu/outerMenu';
import FoodCart from './cart/foodcart';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import cloneDeep from 'lodash/cloneDeep';


class RestrauntMenuDashboard extends Component {

  state = {
    menuCart: [],
    cartTotal: '0.00'
  }

  addingItem = (foodItem) => {
    this.setState(
      {
        menuCart: [...this.state.menuCart, foodItem]
      }, function () {
        // Generate total 
        console.log(this.state.menuCart);
        let tempTotal = this.generateTotal(this.state.menuCart);
        console.log(tempTotal);
        this.setState({
          cartTotal: tempTotal
        });
      }
    );
  }

  removeItem = (itemName) => {
    // Create array of new cart 
    console.log("deleting")
    let dummycart = cloneDeep(this.state.menuCart);

    for (let i=0; i<dummycart.length; i++) {
      if (dummycart[i].name === itemName) {
        dummycart.splice(i, 1);
        break;
      }
    }

    this.setState({
      menuCart: dummycart
      }, function () {
        // Generate total 
        console.log(this.state.menuCart);
        let tempTotal = this.generateTotal(this.state.menuCart);
        console.log(tempTotal);
        this.setState({
          cartTotal: tempTotal
        });
      });
  }

  generateTotal = (foodcart) => {
    let tempTotal = 0.00;
    foodcart.forEach((cartitem) => {
      let copycartitem = Object.assign(cartitem);
      let cleanedPrice = copycartitem.price.replace(/\$/,"");
      tempTotal += parseFloat(cleanedPrice);
    });
    return String(tempTotal);
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
                <FoodCart foodincart={this.state.menuCart}
                 cartTotal={this.state.cartTotal}
                 removeItem={this.removeItem} />
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
