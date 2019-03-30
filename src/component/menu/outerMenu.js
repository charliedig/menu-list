import React, { Component } from 'react';
import MenuHeader from './menuHeader';
import MenuItem from './menuitem';

class OuterMenu extends Component {
  render() {
    /* get all different category types this is the naive solution
    console.log(this.props.menuitems);
    let categoryArray = this.props.menuitems.map((item) => {
        return item.category;
    });
    console.log(categoryArray);
    let distinctCategoryArray = [];
    categoryArray.forEach(function(element) {
        if (!(distinctCategoryArray.includes(element))) {
            distinctCategoryArray.push(element);
        }
    });
    console.log(distinctCategoryArray);

    const menuHeaders = distinctCategoryArray.map((category) => {
        return (
                <MenuHeader headertitle={category}/>
        )
    });
    */
    // Dynamically generate headers and items with out the need for separation

    let distinctFoodCategoryArray = [];

    let menuHeaderandItems = this.props.menuitems.map((item) => {

        // Return a header value if the category is new and then create the item
        if (!(distinctFoodCategoryArray.includes(item.category))) {
            distinctFoodCategoryArray.push(item.category);
            return (
                <div>
                    <MenuHeader headertitle={item.category}/>
                    <MenuItem addingItem={this.props.addingItem} foodItem={item} />
                </div>
            )
        } else {
            // Category is seen and we just need to create the item
            return (
                <div>
                    <MenuItem addingItem={this.props.addingItem} foodItem={item} />
                </div>
            )
        }
    });

    return (
        <div>
            <div className="OuterMenu" style ={{display: 'flex'}}>
                <h4 style={{flex: '20', padding: '5px', textAlign: 'left'}} >Name</h4>
                <h4 style={{flex: '7', textAlign: 'left'}}>Price</h4>
                <h4 style={{flex: '3', textAlign: 'left'}}>Add To Cart</h4>
            </div>

            <div>
                {menuHeaderandItems}
            </div>
        </div>
    );
  }
}

export default OuterMenu;
