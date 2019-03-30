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
    cartTotal: '0.00',
    menuitems: [
      {category: "Appetizers", price: "$49.99", stocked: true, name: "Egg Roll", quantity:2},
      {category: "Appetizers", price: "$9.99", stocked: true, name: "Crab Ragoon", quantity:2},
      {category: "Rice and Noodles", price: "$29.99", stocked: true, name: "Fried Rice", quantity:2},
      {category: "Beef Dishes", price: "$99.99", stocked: true, name: "Wagyu A5 Steak", quantity:2},
      {category: "Chicken Dishes", price: "$399.99", stocked: true, name: "Fried Chicken", quantity:2},
      {category: "Chicken Dishes", price: "$399.99", stocked: true, name: "Chicken and Waffles", quantity:2},
      {category: "Seafood", price: "$199.99", stocked: true, name: "New England Lobster Tail", quantity:2}
    ]
  }

  addingItem = (foodItem) => {

    if (foodItem.stocked) {
      // dock item quantity

      this.setState({
        menuItems:[...this.state.menuitems.map((menuItem) => {
          if (menuItem.name === foodItem.name) {
            if ((foodItem.quantity) - 1 === 0) {
              menuItem.stocked = false;
              menuItem.quantity = 0;
            } else {
              menuItem.quantity = foodItem.quantity - 1;
            }
            return menuItem;
          }
        })]
      }, function () {
        debugger;
        this.setState(
          {
            menuCart: [...this.state.menuCart, foodItem]
          }, function () {
            // Generate total
            let tempTotal = this.generateTotal(this.state.menuCart);
            this.setState({
              cartTotal: tempTotal
            });
          }
        );
      }
    )
    }
  }

  removeItem = (foodItem) => {
    let dummycart = cloneDeep(this.state.menuCart);

    for (let i=0; i<dummycart.length; i++) {
      if (dummycart[i].name === foodItem.name) {
        dummycart.splice(i, 1);
        break;
      }
    }

      this.setState({
        menuItems:[...this.state.menuitems.map((menuItem) => {
          if (menuItem.name === foodItem.name) {
              menuItem.quantity = menuItem.quantity + 1;
              menuItem.stocked = true;
          }
          return menuItem;
        })]
      }, function () {
        this.setState({
          menuCart: dummycart
          }, function () {
            // Generate total
            let tempTotal = this.generateTotal(this.state.menuCart);
            this.setState({
              cartTotal: tempTotal
            });
          });
      }
    );
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
              <OuterMenu addingItem={this.addingItem} menuitems={this.state.menuitems} />
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

export default RestrauntMenuDashboard;
