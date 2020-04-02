import React, { Component } from "react";

class User extends Component {
    render () {
        return (
            <div><p>User Page with User ID : { this.props.match.params.userID }</p></div>
        )
    }
}

export default User;