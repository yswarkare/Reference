import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { isUserLoggedIn, userLogin, verifyCookies, setUserLogout } from "../Redux/Actions/User_Actions";

class Wrapper extends Component {

    componentDidMount = () => {

        // let loginDetails = {
        //     user: {
        //         usernameOrEmailId: "yswarkare@gmail.com",
        //         password: "yogesh702090"
        //     }
        // }
        // this.props.userLogin(loginDetails)
        this.props.isUserLoggedIn();
        // this.props.verifyCookies();
        // this.props.setUserLogout()
    }

    render() {
        return (
            <div>
                <p>Wrapper</p>
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

export default connect(mapStateToProps, { isUserLoggedIn, userLogin, verifyCookies, setUserLogout })(Wrapper)