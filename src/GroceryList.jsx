import React, { Component } from 'react';

class GroceryList extends Component {

    state = {
        inShoppingCart: false
    }

    toggleCart= () => {
        // to update inShoppingCart to switch from true to false
        // then the if changes to else
        this.setState({
            // the state we're trying to update:
            inShoppingCart: true
        })
    }

    render() {
        return (
            <div>
                {/* Ternary Operator = if/else function */}
                {this.props.groceries.item} {this.props.groceries.quantity} {this.props.groceries.units} {this.state.inShoppingCart ? <span>PURCHASED!</span>:""}
            </div>
        );
    }
}

export default GroceryList;