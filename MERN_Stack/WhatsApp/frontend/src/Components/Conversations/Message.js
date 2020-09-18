import React, { Component, Fragment } from "react";

class Message extends Component {

    constructor (props) {
        super ();
        this.state = {
            date: "",
            time: "",
            read: false
        }
    }

    componentDidMount = () => {
        this.setState({
            date: "",
            time: ""
        });
    }

    render () {
        return (
            <Fragment>
                <div className={"card message " + `message-${this.props.message.status}`}>
                    <div className="message-header">
                        <div>
                            
                        </div>
                        <div>
                            <span>{`${this.props.message.message.createdAt}`}</span>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="message-text">
                        <span>{`${this.props.message.message.text}`}</span>
                    </div>
                    <div className="message-footer">
                        <span>message footer</span>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Message;