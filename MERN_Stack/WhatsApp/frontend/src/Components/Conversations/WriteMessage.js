import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TextareaAutosize, Button } from "@material-ui/core";
import { writeMessage, sendMessage, getConversation } from "../../Redux/Actions/Conversation_Actions";
import ShowMessages from "./ShowMessages";

class WriteMessage extends Component {
    
    onChangePutInput = (text) => {
        this.props.writeMessage(text)
    }
    
    onClickSendMessage = () => {
        let message = {
            text: this.props.message.text,
            user_id: this.props.user.user._id,
            friend_id: this.props.conversations.friend._id
        }
        this.props.sendMessage(message);
    }

    render (){
        return (
            <div className="list-group-item mr-1 ml-1">
                <ShowMessages messages={this.props.conversation.messages}></ShowMessages>
                <div className="write-message">
                    <TextareaAutosize onChange={(e)=>{this.onChangePutInput(e.target.value)}} rowsMin={3} rowsMax={5} value={this.props.message.text}></TextareaAutosize>
                    <Button onClick={()=>{this.onClickSendMessage()}} variant="contained" color="primary">send</Button>
                </div>
            </div>
        )
    }
}

WriteMessage.propTypes = {
    user: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
    conversation: PropTypes.object.isRequired,
    conversations: PropTypes.object.isRequired,
    writeMessage: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    getConversation: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        message: state.conversations.message,
        conversation: state.conversations.conversation,
        conversations: state.conversations,
    }
}

const mapDispatchToProps = {
    writeMessage,
    sendMessage,
    getConversation
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteMessage);