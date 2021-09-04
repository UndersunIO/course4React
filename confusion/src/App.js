import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent.js';
import { DISHES } from'./shared/dishes.js';
import DishDetail from './components/DishdetailComponent.js'; 

class App extends Component {
  constructor(props) {
    super(props);
  
  this.state = {
    dishes: DISHES
  };
}
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
        <DishDetail selectedDish={this.state.selectedDish}/>
      </div>
    );
  }
}


export default App;
