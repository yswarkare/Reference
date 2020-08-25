import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./Components/Header";
import Users from "./Components/Users";
import Products from "./Components/Products";
import Orders from "./Components/Orders";
import User from "./Components/User";
import Product from "./Components/Product";
import Order from "./Components/Order";

class App extends React.Component {
  
  render () {
    return (
      <Router>
        <Header/>
        <div className="App">
          <Switch>
            <Route exact path="/"><p>Home Page</p></Route>
            <Route exact path="/users"><Users/></Route>
            <Route exact path="/products"><Products/></Route>
            <Route exact path="/orders"><Orders/></Route>
            <Route path="/users/:userID" component={User}></Route>
            <Route path="/products/:productID" component={Product}></Route>
            <Route path="/orders/:orderID" component={Order}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
