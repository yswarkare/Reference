import React, { Component, Fragment } from "react";
import Message from "./Message";

class ShowMessages extends Component {

    render () {
        return (
            <Fragment>
                <div className="show-messages">
                    {
                        this.props.messages.map((message, index)=>{
                            return (
                                <Message message={message} key={index}></Message>
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default ShowMessages;