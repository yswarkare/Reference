import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Sell from "./components/Sell";
import Buy from "./components/Buy";
import Header from "./components/Header"


function App() {
  return (
    <Router>
      <Header></Header>
      <div className="App">
        <Switch>
          <Route exact path="/" ><Home></Home></Route>
          <Route exact path="/sell" ><Sell></Sell></Route>
          <Route exact path="/buy" ><Buy></Buy></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



