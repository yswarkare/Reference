import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { isUserLoggedIn, setUserLogout } from "../../Redux/Actions/User_Actions";

class MainHeader extends Component {
    constructor (props) {
        super()
        this.state = {
            loggedIn: false,
            listClass: " list-group-item list-group-item-action"
        }
    }

    componentDidMount = () => {
        this.props.isUserLoggedIn()
        console.log("user during rendering header => ", this.props.user)
        this.setState((state, props) => {
            state.loggedIn = props.user.loginStatus.loggedIn
        }, console.log(this.state.loggedIn, this.props.user.loginStatus.loggedIn));
    }

    onClickUserLogOut = () => {
        this.props.setUserLogout()
    }

    render() {
        return (
            <Fragment>
                <div className="main-header">
                    <Link to="/"><div className={`main-header-1 ${this.state.listClass}`}>Home</div></Link>
                    <div className={`main-header-2 ${this.state.listClass}`}>Search Bar</div>
                    {
                        this.props.user.loginStatus.loggedIn === true &&
                        <Link to="/user-account"><div className={`main-header-3 ${this.state.listClass}`}>{this.props.user.user.username}</div></Link>
                    }
                    {
                        this.props.user.loginStatus.loggedIn === true &&
                        <a href="/" onClick={()=>{this.onClickUserLogOut()}}><div className={`main-header-4 ${this.state.listClass}`}>Log Out</div></a>
                    }
                    {
                        this.props.user.loginStatus.loggedIn === false &&
                        <Link to="/user-login"><div className={`main-header-3 ${this.state.listClass}`}>Log In</div></Link>
                    }
                    {
                        this.props.user.loginStatus.loggedIn === false &&
                        <Link to="/register-user"><div className={`main-header-4 ${this.state.listClass}`}>Register</div></Link>
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