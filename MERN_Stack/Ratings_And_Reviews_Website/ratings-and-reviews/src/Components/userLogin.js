import React, { Component } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom"
// import { loginTheUser } from "../Redux/Actions/userActions";


class UserLogin extends Component {

    getUsernameOrEmailId = (usernameOrEmail) => {
        this.props.dispatch({
            type: "Get_Login_Username_Or_Email_ID",
            payload: usernameOrEmail
        })
    }

    getPassword = (password) => {
        this.props.dispatch({
            type: "Get_Login_Password",
            payload: password
        })
    }
    
    userLogin = () => {
        this.props.dispatch({
            type: "Set_Login_Redirect",
        })
    }

    render(){
        return(
            <div className="user-login-container">
                <div className="user-login">
                    <TextField onChange={(e)=>{this.getUsernameOrEmailId(e.target.value)}} type="text" id="outlined-required" label="Username or Email Id" variant="outlined" />
                    <TextField onChange={(e)=>{this.getPassword(e.target.value)}} type="password" autoComplete="current-password" id="outlined-password-input" label="Password" variant="outlined" />
                    <Link to={this.props.loginStatus.loginRedirect}>
                        <Button onClick={()=>{this.userLogin()}} variant="contained" color="primary">
                            Login
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
        loginDetails: state.users.loginDetails,
        errors: state.users.inputErrors,
        loginStatus: state.users.loginStatus
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch: dispatch
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);