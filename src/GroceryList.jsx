import React, { Component } from 'react';

class GroceryList extends Component {



    render() {
        return (
            <div>
                
                {/* Ternary Operator = if/else function */}
                {/* this.props.groceries.item && this.props.groceries.quantity && this.props.groceries.units &&  */}
                {this.props.groceries.inShoppingCart ? "Ready to Purchase":"HIII"}
           </div>
        );
    }
}

export default GroceryList;