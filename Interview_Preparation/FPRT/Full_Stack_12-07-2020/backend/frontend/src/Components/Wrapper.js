import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Navbars/header";
import HomePage from "./homePage";
import UserLogin from "./User/userLogin";
import UserRegistration from "./User/userRegistration"
import UserDashboard from "./User/userDashboard.js";
import UserProfile from "./User/userProfile";
import UserAccount from "./User/userAccount";
import UserTimeline from "./User/userTimeline";

class Wrapper extends Component {

    render(){
        return(
            <Router>
                <div className="wrapper">
                    <Header></Header>
                    <Switch>
                        <Route exact path="/"><HomePage></HomePage></Route>
                        <Route exact path="/user-login"><UserLogin></UserLogin></Route>
                        <Route exact path="/user-registration"><UserRegistration></UserRegistration></Route>
                        <Route exact path="/user-account"><UserAccount></UserAccount></Route>
                        <Route exact path="/user-profile"><UserProfile></UserProfile></Route>
                        <Route exact path="/user-dashboard"><UserDashboard></UserDashboard></Route>
                        <Route exact path="/user-timeline"><UserTimeline></UserTimeline></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Wrapper;