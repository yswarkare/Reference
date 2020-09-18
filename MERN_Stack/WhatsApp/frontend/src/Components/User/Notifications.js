import React, { Component } from "react";
import { connect } from "react-redux";

class Notifications extends Component {

    render () {
        return (
            <div>
                <p>Notifications</p>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(Notifications);