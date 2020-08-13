import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { isUserLoggedIn } from "../Redux/Actions/User_Actions";

class HomePage extends Component {

    componentDidMount = () => {

    }

    render() {
        return (
            <div>
                <p>Home Page</p>
            </div>
        );
    }
}

HomePage.propTypes = {
    isUserLoggedIn:PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { isUserLoggedIn })(HomePage);