import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { isUserLoggedIn, setUserLogout } from "../../Redux/Actions/User_Actions";

class MainHeader extends Component {

    componentDidMount = () => {

    }

    onClickUserLogOut = () => {
        this.props.setUserLogout()
    }

    render() {
        return (
            <Fragment>
                <div className="main-header">
                    <div className="main-header-1"><Link to="/">Home</Link></div>
                    <div className="main-header-2">Search Bar</div>
                    {
                        this.props.user.loginStatus.loggedIn === false &&
                        <div className="main-header-3"><Link to="/user-login">Log In</Link></div>
                    }
                    {
                        this.props.user.loginStatus.loggedIn === false &&
                        <div className="main-header-4"><Link to="/register-user">Register</Link></div>
                    }
                    {
                        this.props.user.loginStatus.loggedIn === true &&
                        <div className="main-header-3"><Link to="/user-account">{this.props.user.user.username}</Link></div>
                    }
                    {
                        this.props.user.loginStatus.loggedIn === true &&
                        <div className="main-header-4"><a href="/" onClick={()=>{this.onClickUserLogOut()}}>Log Out</a></div>
                    }

                </div>
            </Fragment>
        );
    }
}

MainHeader.propTypes = {
    user: PropTypes.object.isRequired,
    isUserLoggedIn: PropTypes.func.isRequired,
    setUserLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { isUserLoggedIn, setUserLogout })(MainHeader);