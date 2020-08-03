import { api, Axios } from "./Axios_Defaults";
import { 
    Is_User_Logged_In,
    Set_User_First_Name,
    Set_User_Middle_Name,
    Set_User_Last_Name,
    Set_User_Username,
    Set_User_Email_Id,
    Set_First_Password,
    Set_Second_Password,
    Register_User,
    Get_Login_Username_Or_Email_ID,
    Get_Login_Password,
    Set_Login_Redirect,
    User_Logout,
    Verify_Cookies,
    User_Errors } from "./Action_Types.js"

export const userErrors = (error, dispatch) => {
    return dispatch({
        type: User_Errors,
        payload: {error}
    })
}

export const setFirstName = (firstName) =>{
    return ({
        type: Set_User_First_Name,
        payload: firstName
    })
}

export const setMiddleName = (middleName) =>{
    return ({
        type: Set_User_Middle_Name,
        payload: middleName
    })
}

export const setLastName = (lastName) =>{
    return ({
        type: Set_User_Last_Name,
        payload: lastName
    })
}

export const setUsername = (username) =>{
    return ({
        type: Set_User_Username,
        payload: username
    })
}

export const setEmailId = (emailId) =>{
    return ({
        type: Set_User_Email_Id,
        payload: emailId
    })
}

export const setPassword = (password) =>{
    return ({
        type: Set_First_Password,
        payload: password
    })
}

export const setRepeatPassword = (repeatPassword) =>{
    return ({
        type: Set_Second_Password,
        payload: repeatPassword
    })
}

export const registerUser = (user) => async dispatch => {
    let res = await Axios.post(`/users/register-user`,user)
    dispatch({
        type: Register_User,
        payload: res
    })
}

export const getUsernameOrEmailId = (usernameOrEmail) => {
    return ({
        type: Get_Login_Username_Or_Email_ID,
        payload: usernameOrEmail
    })
}

export const getPassword = (password) => {
    return ({
        type: Get_Login_Password,
        payload: password
    })
}

export const userLogin = (loginDetails) => async dispatch => {
    try {
        let res = await Axios.patch("/users/user-login",loginDetails)
        dispatch({
        type: Set_Login_Redirect,
        payload: res
        })
    } catch (err) {
        userErrors(err, dispatch);
    }
}

export const isUserLoggedIn = () => async (dispatch) => {
    try{
        let res = await api.patch(`/users/is-user-logged-in`)
        return await dispatch({
            type: Is_User_Logged_In,
            payload: res
        })  
    } catch (err) {
        let error = {success: false, message: "User is Unauthorized to login using saved cookie", error: err}
        userErrors(error, dispatch);
    }
}

export const setUserLogout = (user) => async dispatch => {
    try {        
        let res = await api.patch(`/users/user-logout`, user)
        return await dispatch({
            type: User_Logout,
            payload: res
        })
    } catch (err) {
        let error = {success: false, message: "User is Unauthorized to logout", error: err}
        userErrors(error, dispatch);
    }
}

export const verifyCookies = () => async (dispatch) => {
    try {
        let res = await Axios.patch("/users/verify-cookies");
        dispatch({
            type: Verify_Cookies,
            payload: res
        })
    } catch (err) {
        console.log(err)
    }
}