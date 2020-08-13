import userState from "../States/UserState";
import validator from "validator";
// import Cookies from "js-cookie";
import { 
    Set_User_First_Name,
    Set_User_Middle_Name,
    Set_User_Last_Name,
    Set_User_Username,
    Set_User_Email_Id,
    Set_First_Password,
    Set_Second_Password,
    Register_User,
    Is_User_Logged_In,
    Get_Login_Username_Or_Email_ID,
    Get_Login_Password,
    Set_Login_Redirect,
    User_Logout,
    Get_User_Info,
    Set_User_Update,
    Set_Update_First_Name,
    Set_Update_Middle_Name,
    Set_Update_Last_Name,
    Set_Update_Username,
    Set_Update_Email_Id,
    Set_Update_Old_Password,
    Set_Update_New_Password,
    Set_Update_Repeat_Password,
    Update_User_Name,
    Update_User_Username,
    Update_User_Email_Id,
    Update_User_Password,
    Verify_Cookies,
    User_Errors } from "../Actions/Action_Types.js";

import { Registration_Errors,
        Log_In_Error,
        Is_User_Logged_In_Error,
        Log_Out_Error } from "../Actions/Error_Types"

const userReducer = (state = userState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        
        case Set_User_First_Name:
        stateCopy.user.firstName = action.payload
        return stateCopy

        case Set_User_Middle_Name:
        stateCopy.user.middleName = action.payload
        return stateCopy

        case Set_User_Last_Name:
        stateCopy.user.lastName = action.payload
        return stateCopy

        case Set_User_Username:
        stateCopy.user.username = action.payload
        stateCopy.errors.registration.success = null;
        return stateCopy

        case Set_User_Email_Id:
        let email = validator.isEmail(action.payload);
        stateCopy.user.emailId = action.payload;
        if(email === true){
            stateCopy.errors.registration.emailId.success = true;
            stateCopy.errors.registration.emailId.message = "valid email id"
        } else {
            stateCopy.errors.registration.emailId.success = false;
            stateCopy.errors.registration.emailId.message = "invalid email id"
        }
        stateCopy.errors.registration.success = null;
        return stateCopy;

        case Set_First_Password:
        stateCopy.passwords.first = action.payload;
        if (stateCopy.passwords.first !== stateCopy.passwords.second){
            stateCopy.errors.registration.password.success = false;
            stateCopy.errors.registration.password.message = "Password didn't matched";
        } else {
            stateCopy.errors.registration.password.success = false;
            stateCopy.errors.registration.password.message = "Password matched";
        }
        stateCopy.errors.registration.firstPassword.message = "Choose a password containing at least one lowercase, one uppercase letter, one digit and special character.";
        stateCopy.errors.registration.secondPassword.message = "Enter the password again";
        console.log(stateCopy);
        return stateCopy;

        case Set_Second_Password:
        stateCopy.passwords.second = action.payload;
        stateCopy.user.password = action.payload;
        if (stateCopy.passwords.second !== stateCopy.passwords.first){
            stateCopy.errors.registration.password.success = false;
            stateCopy.errors.registration.password.message = "Password didn't matched";
        } else {
            stateCopy.errors.registration.password.success = false;
            stateCopy.errors.registration.password.message = "Password matched";
        }
        stateCopy.errors.registration.firstPassword.message = "Choose a password containing at least one lowercase, one uppercase letter, one digit and special character.";
        stateCopy.errors.registration.secondPassword.message = "Enter the password again";
        console.log(stateCopy);
        return stateCopy;

        case Register_User:
        console.log(action.payload);
        stateCopy.errors.registration.success = action.payload.data.success;
        stateCopy.errors.registration.message = action.payload.data.message;
        if (action.payload.data.success === true){
            stateCopy.loginStatus.registrationRedirect = "/user-login";
            stateCopy.loginStatus.userRegistered = true;
            stateCopy.errors.registration.error = null
        } else {
            stateCopy.errors.registration.error = action.payload.data.error;
            stateCopy.errors.registration.errors = action.payload.data.errors;
            stateCopy.loginStatus.registrationRedirect = "/user-registration";
        }
        stateCopy.errors.registration.firstPassword.message = "Choose a password containing at least one lowercase, one uppercase letter, one digit and special character.";
        stateCopy.errors.registration.secondPassword.message = "Enter the password again";
        console.log(stateCopy);
        return stateCopy

        case Is_User_Logged_In:
        console.log(action.payload);
        state.user = action.payload.data.user;
        state.loginStatus.loggedIn = action.payload.data.success;
        if (action.payload.data.success === true) {
            state.loginStatus.loginRedirect = "/user-account"
        } else {
            state.loginStatus.loginRedirect = "/"
        }
        console.log(state)
        return state;

        case Verify_Cookies:
        console.log(action.payload)
        return stateCopy;

        case Get_Login_Username_Or_Email_ID:
        stateCopy.loginDetails.usernameOrEmailId = action.payload
        console.log(stateCopy);
        return stateCopy

        case Get_Login_Password:
        stateCopy.loginDetails.password = action.payload;
        console.log(stateCopy)
        return stateCopy

        case Set_Login_Redirect:
        console.log(action.payload)
        if (action.payload.data.success && action.payload.data.success === false) {
            state.errors.login.success = false;
            state.errors.login.message = action.payload.data.message;
            state.loginStatus.loginRedirect = "/user-login"
        } else {
            state.user = action.payload.data.loggedIn.user
            state.loginStatus.loggedIn = action.payload.data.success;
            state.loginStatus.loginRedirect = "/user-account"
            state.errors.logIn.password.success = false;
            state.errors.logIn.password.message = "Enter your password";
            state.errors.logIn.usernameOrEmailId.success = false;
            state.errors.logIn.usernameOrEmailId.message = "Enter your username or email id";
        }
        console.log(state);
        return state
    
        case User_Logout:
        console.log(action.payload)
        state.user.token = "";
        state.loginStatus.loggedIn = false;
        alert("You are successfully Logged Out.");
        state.loginStatus.logoutRedirect = "/";
        console.log(state);
        return state

        case Get_User_Info:
        console.log(action.payload);
        // stateCopy.user = action.payload.data.user,
        stateCopy.user._id = action.payload.data.user._id;
        stateCopy.user.firstName = action.payload.data.user.firstName;
        stateCopy.user.middleName = action.payload.data.user.middleName;
        stateCopy.user.lastName = action.payload.data.user.lastName;
        stateCopy.user.username = action.payload.data.user.username;
        stateCopy.user.emailId = action.payload.data.user.emailId;
        console.log(stateCopy)
        return stateCopy;

        // Update User Info

        case Set_User_Update:
        stateCopy.userUpdate.firstName = stateCopy.user.firstName;
        stateCopy.userUpdate.middleName = stateCopy.user.middleName;
        stateCopy.userUpdate.lastName = stateCopy.user.lastName;
        stateCopy.userUpdate.username = stateCopy.user.username;
        stateCopy.userUpdate.emailId = stateCopy.user.emailId;
        console.log(stateCopy)
        return stateCopy;

        case Set_Update_First_Name:
        stateCopy.userUpdate.firstName = action.payload
        console.log(stateCopy)
        return stateCopy;

        case Set_Update_Middle_Name:
        stateCopy.userUpdate.middleName = action.payload
        console.log(stateCopy)
        return stateCopy;

        case Set_Update_Last_Name:
        stateCopy.userUpdate.lastName = action.payload
        console.log(stateCopy)
        return stateCopy;

        case Set_Update_Username:
        stateCopy.userUpdate.username = action.payload
        console.log(stateCopy)
        return stateCopy;

        case Set_Update_Email_Id:
        stateCopy.userUpdate.emailId = action.payload
        console.log(stateCopy)
        return stateCopy;

        case Set_Update_Old_Password:
        stateCopy.userUpdate.oldPassword = action.payload
        console.log(stateCopy)
        return stateCopy;

        case Set_Update_New_Password:
        stateCopy.userUpdate.newPassword = action.payload
        console.log(stateCopy)
        return stateCopy;

        case Set_Update_Repeat_Password:
        stateCopy.userUpdate.repeatPassword = action.payload
        console.log(stateCopy)
        return stateCopy;

        case Update_User_Name:
        console.log(action.payload)
        stateCopy.errors.emailId.message = action.payload.data.message;
        stateCopy.errors.emailId.success = action.payload.data.success;
        console.log(stateCopy);
        return stateCopy;

        case Update_User_Username:
        console.log(action.payload)
        stateCopy.errors.emailId.message = action.payload.data.message;
        stateCopy.errors.emailId.success = action.payload.data.success;
        console.log(stateCopy);
        return stateCopy;

        case Update_User_Email_Id:
        console.log(action.payload)
        stateCopy.errors.emailId.message = action.payload.data.message;
        stateCopy.errors.emailId.success = action.payload.data.success;
        console.log(stateCopy);
        return stateCopy;

        case Update_User_Password:
        console.log(action.payload)
        stateCopy.errors.emailId.message = action.payload.data.message;
        stateCopy.errors.emailId.success = action.payload.data.success;
        console.log(stateCopy);
        return stateCopy;

        // Errors

        case User_Errors:
            console.log(action.payload);
            return stateCopy;

        case Registration_Errors:
            console.log(action.payload);
            let errors_R = action.payload.error.response.data;
            if (errors_R.errorType === "firstName"){
                stateCopy.errors.registration.firstName.success = false;
                stateCopy.errors.registration.firstName.message = errors_R.message;
            } else {
                stateCopy.errors.registration.firstName.success = true;
                stateCopy.errors.registration.firstName.message = "your first name";
            }
            if (errors_R.errorType === "middleName"){
                stateCopy.errors.registration.middleName.success = false;
                stateCopy.errors.registration.middleName.message = errors_R.message;
            } else {
                stateCopy.errors.registration.middleName.success = true;
                stateCopy.errors.registration.middleName.message = "your middle name";
            }
            if (errors_R.errorType === "lastName"){
                stateCopy.errors.registration.lastName.success = false;
                stateCopy.errors.registration.lastName.message = errors_R.message;
            } else {
                stateCopy.errors.registration.lastName.success = true;
                stateCopy.errors.registration.lastName.message = "your last name";
            }
            if (errors_R.errorType === "username"){
                stateCopy.errors.registration.username.success = false;
                stateCopy.errors.registration.username.message = errors_R.message;
            } else {
                stateCopy.errors.registration.username.success = true;
                stateCopy.errors.registration.username.message = "your username";
            }
            if (errors_R.errorType === "emailId"){
                stateCopy.errors.registration.emailId.success = false;
                stateCopy.errors.registration.emailId.message = errors_R.message;
            } else {
                stateCopy.errors.registration.emailId.success = true;
                stateCopy.errors.registration.emailId.message = "your email id";
            }
            if (errors_R.errorType === "password"){
                stateCopy.errors.registration.password.success = false;
                stateCopy.errors.registration.firstPassword.message = "";
                stateCopy.errors.registration.secondPassword.message = "";
                if (errors_R.errors) {
                    errors_R.message = errors_R.message + errors_R.errors.toString();
                    console.log(errors_R.message)
                }
                stateCopy.errors.registration.password.message = errors_R.message;
            } else {
                stateCopy.errors.registration.password.success = true;
                stateCopy.errors.registration.password.message = "valid password";
                stateCopy.errors.registration.firstPassword.message = "";
                stateCopy.errors.registration.secondPassword.message = "";
            }
            return stateCopy;

        case Log_In_Error:
            console.log(action.payload);
            stateCopy.errors.logIn.errorType = action.payload.error.response.data.errorType;
            if (stateCopy.errors.logIn.errorType === "usernameOrEmailId"){
                stateCopy.errors.logIn.usernameOrEmailId.success = action.payload.error.response.data.success;
                stateCopy.errors.logIn.usernameOrEmailId.message = action.payload.error.response.data.message;
            } else if (stateCopy.errors.logIn.errorType === "password") {
                stateCopy.errors.logIn.password.success = action.payload.error.response.data.success;
                stateCopy.errors.logIn.password.message = action.payload.error.response.data.message;
            } else {
                console.log("some other error")
            }
            console.log(stateCopy);
            return stateCopy;

        case Is_User_Logged_In_Error:
            console.log(action.payload);
            return stateCopy;

        case Log_Out_Error:
            console.log(action.payload);
            return stateCopy;

        default:
        return stateCopy;
    }
}

export default userReducer;