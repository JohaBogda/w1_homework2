import React, { Component } from 'react';

class GroceryList extends Component {

    state = {
        inShoppingCart: false
    }

    toggleCart= () => {
        // to update inShoppingCart to switch from true to false
        // then the if changes to else
        this.setState({
            // updating inShoppingCart to the opposite with !
            inShoppingCart: !this.state.inShoppingCart
        })
    }

    render() {
        return (
            <div onClick={this.toggleCart}>
                
                {/* Ternary Operator = if/else function */}
                {this.props.groceries.item} {this.props.groceries.quantity} {this.props.groceries.units} {this.state.inShoppingCart ? <span>PURCHASED!</span>:"hii"}
           </div>
        );
    }
}

export default GroceryList;