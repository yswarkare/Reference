import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { getAllFriends } from "../../Redux/Actions/User_Actions";
import { getConversation } from "../../Redux/Actions/Conversation_Actions";
import WriteMessage from "../Conversations/WriteMessage";
import UsersList from "./users_list/Users_List";

class UserDashboard extends Component {

    componentDidMount = () => {
        this.props.getAllFriends();
        let conversation_01 = sessionStorage.getItem("conversation");
        let conversation = JSON.parse(conversation_01);
        console.log("sessionStorage => ");
        console.log(conversation);
        let friend_01 = sessionStorage.getItem("friend");
        let friend = JSON.parse(friend_01);
        console.log("sessionStorage => ");
        console.log(friend);
        if (conversation !== null && friend !== null) {
            this.props.getConversation(conversation, friend);
        }
    }

    onFriendClick = (friend) => {
        let conversation = {
            user_id: this.props.user.user._id,
            friend_id: friend._id
        }
        let conversation_01 = JSON.stringify(conversation);
        sessionStorage.removeItem("conversation");
        sessionStorage.setItem("conversation", conversation_01);
        let friend_01 = JSON.stringify(friend);
        sessionStorage.removeItem("friend");
        sessionStorage.setItem("friend", friend_01);
        this.props.getConversation(conversation, friend);
    }

    render() {
        return (
            <div className="dashboard">
                <div className="conversations-list">
                    <UsersList list={this.props.users.allUsers} onClick={(item)=>{this.onFriendClick(item)}}></UsersList>
                </div>
                <div className="conversations">
                    <ul>
                        {
                            this.props.user.conversation && this.props.concersation.map((message, index)=>{
                                return (
                                    <li className={"message-"+ message.state} key={index}>{message}</li>
                                )
                            })
                        }
                    </ul>
                    <div>
                        <WriteMessage></WriteMessage>
                    </div>
                </div>
            </div>
        )
    }
}

UserDashboard.propTypes = {
    list: PropTypes.array.isRequired,
    getAllFriends: PropTypes.func.isRequired,
    getConversation: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        users: state.users,
        list: state.user.list
    }
}

const mapDispatchToProps = {
    getAllFriends,
    getConversation
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);