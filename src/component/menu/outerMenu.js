import React, { Component } from 'react';
import MenuHeader from './menuHeader';
import MenuItem from './menuitem';

class OuterMenu extends Component {
  render() {
    // get all different category types
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
        return <MenuHeader headertitle={category}/>
    });

    return (
        <div>
            <div className="OuterMenu" style ={{display: 'flex'}}>
                <h4 style={{flex: '20', padding: '5px', textAlign: 'left'}} >Name</h4>
                <h4 style={{flex: '7', textAlign: 'left'}}>Price</h4>
                <h4 style={{flex: '3', textAlign: 'left'}}>Add To Cart</h4>

            </div>

            <div>
                {menuHeaders}
            </div>
            <div>
                <MenuItem/>
            </div>
        </div>
    );
  }
}

export default OuterMenu;
