import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserInfo } from "../../Redux/Actions/userProfileActions";

class UserDashboard extends Component {

    componentDidMount = () => {
        this.props.getUserInfo()
    }

    render(){
        return(
            <div className="user-dashboard-container">
                <div className="user-dashboard">
                    This Is User Dashboard
                </div>
            </div>
        )
    }
}

UserDashboard.propTypes = {
    getUserInfo: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { getUserInfo })(UserDashboard);