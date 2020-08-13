import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import TextInput from "../Templates/TextInput";
import PasswordInput from "../Templates/Password_Input";
import CustomButton from "../Templates/Button";
import { setFirstName, setMiddleName, setLastName, setUsername, setEmailId, setFirstPassword, setSecondPassword, registerUser } from "../../Redux/Actions/User_Actions";

class RegisterUser extends Component {

    onChangeSetFirstName = (firstName) => {
        this.props.setFirstName(firstName);
    }

    onChangeSetMiddleName = (middleName) => {
        this.props.setMiddleName(middleName);
    }

    onChangeSetLastName = (lastName) => {
        this.props.setLastName(lastName);
    }

    onChangeSetUsername = (username) => {
        this.props.setUsername(username);
    }

    onChangeSetEmailId = (emailId) => {
        this.props.setEmailId(emailId);
    }

    onChangeSetFirstPassword = (password) => {
        this.props.setFirstPassword(password);
    }

    onChangeSetSecondPassword = (repeatPassword) => {
        this.props.setSecondPassword(repeatPassword);
    }

    onClickRegisterUser = () => {
        let user = {
            user: this.props.user.user
        }
        this.props.registerUser(user)
    }

    render() {
        return (
            <div className="register-user">
                <div className="register-user-container">
                    <div className="register-name">
                        <TextInput
                            inputType="First Name"
                            error={!this.props.errors.registration.firstName.success}
                            helperText={this.props.errors.registration.firstName.message}
                            defaultValue={this.props.user.user.firstName}
                            setInputValue={(value)=>this.onChangeSetFirstName(value)}>
                        </TextInput>
                        <TextInput
                            inputType="Middle Name"
                            error={!this.props.errors.registration.middleName.success}
                            helperText={this.props.errors.registration.middleName.message}
                            defaultValue={this.props.user.user.middleName}
                            setInputValue={(value)=>this.onChangeSetMiddleName(value)}>
                        </TextInput>
                        <TextInput
                            inputType="Last Name"
                            error={!this.props.errors.registration.lastName.success}
                            helperText={this.props.errors.registration.lastName.message}
                            defaultValue={this.props.user.user.lastName}
                            setInputValue={(value)=>this.onChangeSetLastName(value)}>
                        </TextInput>
                    </div>
                    <div className="register-username-email-id">
                        <TextInput
                            inputType="Username"
                            error={!this.props.errors.registration.username.success}
                            helperText={this.props.errors.registration.username.message}
                            defaultValue={this.props.user.user.username}
                            setInputValue={(value)=>this.onChangeSetUsername(value)}>
                        </TextInput>
                        <TextInput
                            inputType="Email ID"
                            error={!this.props.errors.registration.emailId.success}
                            helperText={this.props.errors.registration.emailId.message}
                            defaultValue={this.props.user.user.emailId}
                            setInputValue={(value)=>this.onChangeSetEmailId(value)}>
                        </TextInput>
                    </div>
                    <div className="register-password">
                        <PasswordInput
                            inputType="Password"
                            error={!this.props.errors.registration.firstPassword.success}
                            helperText={this.props.errors.registration.firstPassword.message}
                            defaultValue={this.props.user.passwords.first}
                            onChange={(value)=>this.onChangeSetFirstPassword(value)}>
                        </PasswordInput>
                        <PasswordInput
                            inputType="Repeat Password"
                            error={!this.props.errors.registration.secondPassword.success}
                            helperText={this.props.errors.registration.secondPassword.message}
                            defaultValue={this.props.user.passwords.second}
                            onChange={(value)=>this.onChangeSetSecondPassword(value)}>
                        </PasswordInput>
                    </div>
                    {
                        this.props.user.errors.registration.password.success === false &&
                        <div className="error"><p>{this.props.errors.registration.password.message}</p></div>
                    }
                    <div className="register-button">
                        <CustomButton
                        buttonName="Register"
                        redirect="#"
                        onClick={()=>{this.onClickRegisterUser()}}>
                        </CustomButton>
                    </div>
                </div>
            </div>
        );
    }
}

RegisterUser.propTypes = {
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    setFirstName: PropTypes.func.isRequired,
    setMiddleName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
    setEmailId: PropTypes.func.isRequired,
    setFirstPassword: PropTypes.func.isRequired,
    setSecondPassword: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        errors: state.user.errors
    }
}

export default connect(mapStateToProps, { 
    setFirstName, 
    setMiddleName, 
    setLastName, 
    setUsername, 
    setEmailId, 
    setFirstPassword, 
    setSecondPassword,
    registerUser })(RegisterUser)