import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isUserLoggedIn, userLogin, verifyCookies, setUserLogout } from "../Redux/Actions/User_Actions";
import MainHeader from "./Headers/MainHeader";
import HomePage from "./HomePage";
import UserLogIn from "./User/UserLogIn";
import RegisterUser from "./User/Register_User";
import UserAccount from "./User/User_Account";
import UserDashboard from "./User/User_Dashboard";

class Wrapper extends Component {

    componentDidMount = () => {
        this.props.isUserLoggedIn();
    }

    render() {
        return (
            <div className="wrapper">
                <Router>
                <MainHeader></MainHeader>
                    <Switch>
                        <Route exact path="/"><HomePage></HomePage></Route>
                        <Route exact path="/user-login"><UserLogIn></UserLogIn></Route>
                        <Route exact path="/register-user"><RegisterUser></RegisterUser></Route>
                        <Route exact path="/user-account"><UserAccount></UserAccount></Route>
                        <Route exact path="/user-dashboard"><UserDashboard></UserDashboard></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

Wrapper.propTypes = {
    user: PropTypes.object.isRequired,
    isUserLoggedIn: PropTypes.func.isRequired,
    verifyCookies: PropTypes.func.isRequired,
    userLogin: PropTypes.func.isRequired,
    setUserLogout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    isUserLoggedIn,
    userLogin,
    verifyCookies,
    setUserLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)