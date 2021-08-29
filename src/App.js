import React, { Component } from 'react';
import groceries from './groceries';
import GroceryList from "./GroceryList";
import './App.css';

export default class App extends Component {

  state = {
    // 
    groceries:groceries,
    // default values
    item: "",
    quantity: "",
    units: "",
  };

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      // item: event.target.value,
      // quantity: event.target.value,
      // units: event.target.value
      // to avoid only changing one object in the state, focusing on id gives all objects the opportunity to type into the input
      [event.target.id]:event.target.value
    })
  }

  // arrow function for submit button to add newItem to groceries
  handleSubmit = (event) => {
    // preventDefault stops website from refreshing
    event.preventDefault()
    const newItem = {
      item: this.state.item,
      quantity: this.state.quantity,
      units: this.state.units
    }
    // adding new item to state.groceries: 
    this.setState({
      groceries: [newItem, ...this.state.groceries],
    
      // to clear the input field without having to delete the old add item:
      // reset state to default:
      item: "",
      quantity: 0,
      units: "",
    })
  }

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <div>{this.state.groceries.map((parameter) => {
          return (
            <li> Item: {parameter.item}; Quantity: {parameter.quantity}; Units: {parameter.units}</li>
          )
        })}
        </div>
        <div>
          <h1>Add new item to Grocery List</h1>
          {/* forms should always come with label to make it look nice/ accessibility and input to type text into */}
          <form onSubmit={this.handleSubmit}>
            {/* id connects the event to state */}
            <label htmlFor="item">Item: </label>
            <input type="text" id="item" value={this.state.item} onChange={this.handleChange} />
              <br/>
            <label htmlFor="quantity">Quantity: </label>
            <input type="text" id="quantity" value={this.state.quantity} onChange={this.handleChange} />
              <br/>
            <label htmlFor="units">Units: </label>
            <input type="text" id="units" value={this.state.units} onChange={this.handleChange} />
              <br/>
            {/* input with submit type becomes a button to submit */}
            <input type="submit"/>
          </form>
        </div>
        
      </div>
      
    );
  }
}
