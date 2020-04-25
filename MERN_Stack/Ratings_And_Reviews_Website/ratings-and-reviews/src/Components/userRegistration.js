import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// import axios from "axios";

class UserRegistraion extends Component {

    setFirstName = (firstName) =>{
        this.props.dispatch({
            type: "Set_User_First_Name",
            payload: firstName
        })
    }
    
    setMiddleName = (middleName) =>{
        this.props.dispatch({
            type: "Set_User_Middle_Name",
            payload: middleName
        })
    }
    
    setLastName = (lastName) =>{
        this.props.dispatch({
            type: "Set_User_Last_Name",
            payload: lastName
        })
    }
    
    setUserName = (username) =>{
        this.props.dispatch({
            type: "Set_User_Username",
            payload: username
        })
    }
    
    setEmailId = (emailId) =>{
        this.props.dispatch({
            type: "Set_User_Email_ID",
            payload: emailId
        })
    }
    
    setPassword = (password) =>{
        this.props.dispatch({
            type: "Set_First_Password",
            payload: password
        })
    }
    
    setRepeatPassword = (repeatPassword) =>{
        this.props.dispatch({
            type: "Set_Second_Password",
            payload: repeatPassword
        })
    }

    registerUser = () => {
        this.props.dispatch({
            type: "Register_User"
        })
    }



    render(){
        console.log(this.props.user)
        return(
            
            <div className="user-registration-container">
                <div className="user-registration">
                    <TextField type="text" onChange={(e)=>{this.setFirstName(e.target.value)}} label="First Name" variant="outlined" />
                    <TextField type="text" onChange={(e)=>{this.setMiddleName(e.target.value)}} label="Middle Name" variant="outlined" />
                    <TextField type="text" onChange={(e)=>{this.setLastName(e.target.value)}} label="Last Name" variant="outlined" />
                    <div></div>
                    <TextField type="text" onChange={(e)=>{this.setUserName(e.target.value)}} label="Username" variant="outlined" />
                    <TextField type="text" onChange={(e)=>{this.setEmailId(e.target.value)}} label="Email Id" variant="outlined" />
                    <TextField type="password" onChange={(e)=>{this.setPassword(e.target.value)}} autoComplete="current-password" label="Password" variant="outlined" />
                    <TextField type="password" onChange={(e)=>{this.setRepeatPassword(e.target.value)}} autoComplete="current-password" label="Repeat Password" variant="outlined" />
                    <div></div>
                    <Link to={this.props.loginStatus.registrationRedirect}>
                        <Button onClick={()=>{this.registerUser()}} variant="contained" color="primary">
                            Register
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user,
        errors: state.users.inputErrors,
        loginStatus: state.users.loginStatus.registrationRedirect
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(UserRegistraion);