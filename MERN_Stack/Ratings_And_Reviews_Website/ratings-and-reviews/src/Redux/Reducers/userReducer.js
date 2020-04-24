import userState from "../States/userState";
import validator from "validator";

let userReducer = ( state = userState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch(action.type) {

        case "Set_User_First_Name":
            stateCopy.user.firstName = action.payload
            return stateCopy

        case "Set_User_Middle_Name":
            stateCopy.user.middleName = action.payload
            return stateCopy

        case "Set_User_Last_Name":
            stateCopy.user.lastName = action.payload
            return stateCopy

        case "Set_User_Username":
            stateCopy.user.userName = action.payload
            return stateCopy

        case "Set_User_Email_ID":
            let email = validator.isEmail(action.payload);
            if(email === true){
                stateCopy.inputErrors.emailId = false;
                stateCopy.user.emailId = action.payload
            } else {
                stateCopy.inputErrors.emailId = true;
            }
            return stateCopy

        case "Set_First_Password":
            stateCopy.firstPassword = action.payload
            return stateCopy

        case "Set_Second_Password":
            if (stateCopy.firstPassword === action.payload){
                stateCopy.user.password = action.payload
                stateCopy.inputErrors.password = false
            } else {
                stateCopy.inputErrors.password = true
            }
            return stateCopy

        case "Get_Login_Username_Or_Email_ID":
            stateCopy.loginDetails.usernameOrEmailId = action.payload
            return stateCopy

        case "Get_Login_Password":
            stateCopy.loginDetails.password = action.payload;
            return stateCopy

        case "Set_Login_Redirect":
            if (this.props.loginStatus.loggedIn === true && this.props.loginStatus.userIsAdmin === false) {
                stateCopy.loginStatus.loginRedirect = "/user-dashboard"
            } else if (this.props.loginStatus.loggedIn === true && this.props.loginStatus.userIsAdmin === true) {
                stateCopy.loginStatus.loginRedirect = "/admin-dashboard"
            }
            return stateCopy

        case "Register_User":
            
            return stateCopy

        default:
            return stateCopy;
    }


}

export default userReducer;