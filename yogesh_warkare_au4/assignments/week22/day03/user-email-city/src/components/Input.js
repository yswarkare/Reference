import React, {Component} from "react";


class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            emailID: ""
        }
    }

    componentWillMount = ()=>{
        let userName = this.props.userName;
        let emailID = this.props.emailID;
        this.setState({
            userName: userName,
            emailID: emailID
        })
    }

    handleUserNameChange = (userName)=>{
        this.setState({
            userName: userName
        })
    }

    handleEmailIDChange = (emailID)=>{
        this.setState({
            emailID: emailID
        },()=>this.props.sendUserNameEmail(this.state))
    }

    render (){
        console.log("State In Input => "+ this.state.emailID)
        return (
            <div className="input">
                <input onChange={(e)=>{this.handleUserNameChange(e.target.value)}} value={this.state.userName} placeholder="User Name" />
                <input onChange={(e)=>{this.handleEmailIDChange(e.target.value)}} value={this.state.emailID} placeholder="Email ID" />
            </div>
        )
    }
}

export default Input;