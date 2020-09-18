import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import UserDashboard from "./User_Dashboard";
import UserProfile from "./User_Profile";

class UserAccount extends Component {
    constructor(){
        super()
        this.state = {
            showTab: "dashboard",
            tabClass: "card list-group-item-action m-2 p-2 ",
            dashboardClass: "card list-group-item-action m-1 p-2",
            profileClass: "card list-group-item-action m-1 p-2",
            activeClass: "list-group-item-info"
        } 
    }

    changeTab = (tab) => {
        if (tab === "dashboard") {
            this.setState({
                showTab: tab,
                dashboardClass: this.state.tabClass + this.state.activeClass,
                profileClass: this.state.tabClass,
            })
        } else if (tab === "profile") {
            this.setState({
                showTab: tab,
                dashboardClass: this.state.tabClass,
                profileClass: this.state.tabClass + this.state.activeClass
            })
        }
        
    }

    render() {
        return (
            <div>
                <div className="user-account-header">
                    {/* <div onClick={()=>{this.changeTab("notifications")}}>Notifications</div> */}
                    <div className={this.state.dashboardClass} onClick={()=>{this.changeTab("dashboard")}}>User Dashboard</div>
                    <div className={this.state.profileClass} onClick={()=>{this.changeTab("profile")}}>User Profile</div>
                </div>
                {
                    this.state.showTab === "dashboard" &&
                    <UserDashboard></UserDashboard>
                }
                {
                    this.state.showTab === "profile" &&
                    <UserProfile></UserProfile>
                }
            </div>
        );
    }
}

UserAccount.propTypes = {

};

export default UserAccount;