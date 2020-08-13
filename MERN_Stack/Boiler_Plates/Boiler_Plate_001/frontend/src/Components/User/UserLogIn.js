import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import TextInput from "../Templates/TextInput";
import CustomButton from "../Templates/Button"
import PasswordInput from "../Templates/Password_Input";
import { getUsernameOrEmailId, getPassword, userLogin, setUserLogout } from "../../Redux/Actions/User_Actions";

class UserLogIn extends Component {
    constructor(props) {
        super()
        this.state = {
            usernameOrEmailId: {success: null, message: "Enter your username or email id"},
            password: {success: null, message: "Enter your password"}
        }
    }
    
    componentDidCatch = () => {
        if (this.props.errors.logIn.usernameOrEmailId.success === false) {
            this.setState({
                usernameOrEmailId: this.props.errors.logIn.usernameOrEmailId
            }, console.log(this.state))
        }
        if (this.props.errors.logIn.password.success === false) {
            this.setState({
                password: this.props.errors.logIn.password
            })
        }
    }

    setInputUsernameOrEmailId = (value) => {
        this.props.getUsernameOrEmailId(value)
    }

    setInputPassword = (value) => {
        this.props.getPassword(value)
    }

    clickUserLogIn = async () => {
        let loginDetails = {
            user: this.props.user.loginDetails
        }
        await this.props.userLogin(loginDetails);
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.user.loginStatus.loggedIn === false &&
                    <div className="user-login">
                        <TextInput 
                        inputType="Username or Email ID"
                        error={!this.props.errors.logIn.usernameOrEmailId.success}
                        helperText={this.props.errors.logIn.usernameOrEmailId.message}
                        defaultValue={this.props.user.user.firstName}
                        setInputValue={(value)=>this.setInputUsernameOrEmailId(value)}>
                        </TextInput>
                        <PasswordInput
                        inputType="password"
                        error={!this.props.errors.logIn.password.success}
                        helperText={this.props.errors.logIn.password.message}
                        defaultValue={this.props.user.user.firstName}
                        onChange={(value)=>this.setInputPassword(value)}>
                        </PasswordInput>
                        <CustomButton
                        redirect={this.props.user.loginStatus.loginRedirect}
                        buttonName="Login"
                        onClick={()=>{this.clickUserLogIn()}}></CustomButton>
                    </div>
                }
                {
                    this.props.user.loginStatus.loggedIn === true &&
                    <div className="user-login">
                    <p>{this.props.user.user.username} you are already logged in click here to go to your <Link to="/user-account">account</Link> or click here to <Link to="/" onClick={()=>{this.props.setUserLogout()}}>log out</Link> </p>
                    </div>
                }
            </Fragment>
        );
    }
}

UserLogIn.propTypes = {
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getUsernameOrEmailId: PropTypes.func.isRequired,
    getPassword: PropTypes.func.isRequired,
    userLogin: PropTypes.func.isRequired,
    setUserLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        errors: state.user.errors
    }
}

export default connect(mapStateToProps, { 
    getUsernameOrEmailId,
    getPassword,
    userLogin,
    setUserLogout })(UserLogIn)