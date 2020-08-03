import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class User_Log_In extends Component {



    render() {
        return (
            <div className="user-login">
                
            </div>
        );
    }
}

User_Log_In.propTypes = {
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(User_Log_In)