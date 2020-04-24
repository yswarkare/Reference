import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./header";
import HomePage from "./homePage";
import UserDashboard from "./userDashboard";
import UserProfile from "./userProfile";
import UserLogin from "./userLogin";
import UserRegistration from "./userRegistration"
import AdminDashboard from "./adminDashboard";
import AdminProfile from "./adminProfile";
import Products from "./products";

class Wrapper extends Component {
    render(){
        return(
            <Router>
                <div className="wrapper">
                    <Header></Header>
                    <Switch>
                        <Route exact path="/"><HomePage></HomePage></Route>
                        <Route exact path="/products"><Products></Products></Route>
                        <Route exact path="/user-profile"><UserProfile></UserProfile></Route>
                        <Route exact path="/user-dashboard"><UserDashboard></UserDashboard></Route>
                        <Route exact path="/admin-profile"><AdminProfile></AdminProfile></Route>
                        <Route exact path="/admin-dashboard"><AdminDashboard></AdminDashboard></Route>
                        <Route exact path="/user-login"><UserLogin></UserLogin></Route>
                        <Route exact path="/user-registration"><UserRegistration></UserRegistration></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Wrapper;