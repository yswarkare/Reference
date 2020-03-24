import React, {Component} from "react";
import Input from "./Input";
import City from "./City"

class Wrapper extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName: "",
            emailID: "",
            city: ""
        }
    }

    componentWillMount = () =>{
        let userDetails = this.props.userDetails;
        this.setState({
            userName: userDetails.userName,
            emailID: userDetails.emailID,
            city: userDetails.city
        })
    }

    addUserNameEmail = (nameEmail) =>{
        let userName = nameEmail.userName;
        let emailID = nameEmail.emailID;
        this.setState({
            userName: userName,
            emailID: emailID
        })
    }

    addCity = (city) =>{
        this.setState({
            city: city
        })

    }

    sendDetailsToApp = ()=> {
        this.props.getUserDetailsFromWrapper(this.state)
    }

    render () {
        console.log("State In Wrapper => "+ this.state.userName);
        console.log("State In Wrapper => "+ this.state.emailID)
        return(
            <div className="wrapper">
                <Input userName={this.state.userName} emailID={this.state.emailID} sendUserNameEmail={(nameEmail)=>{this.addUserNameEmail(nameEmail)}}/>
                <City city={this.state.city} getCity={(city)=>{this.addCity(city)}}/>
                <div className="save-button">
                    <button onClick={()=>{this.sendDetailsToApp()}}>Save</button>
                </div>
                
            </div>
        )
    }
}

export default Wrapper;