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

import { Registration_Errors,
    Log_In_Error,
    Is_User_Logged_In_Error,
    Log_Out_Error } from "./Error_Types";

export const userErrors = (error, dispatch) => {
    return dispatch({
        type: User_Errors,
        payload: {error}
    })
}

export const setFirstName = (firstName) => (dispatch) =>{
    try {
        dispatch({
            type: Set_User_First_Name,
            payload: firstName
        })
    } catch (error) {
        userErrors(error, dispatch);
    }
}

export const setMiddleName = (middleName) => (dispatch) =>{
    try {        
        dispatch({
            type: Set_User_Middle_Name,
            payload: middleName
        })
    } catch (error) {
        userErrors(error, dispatch);
    }
}

export const setLastName = (lastName) => (dispatch) =>{
    try {        
        dispatch({
            type: Set_User_Last_Name,
            payload: lastName
        })
    } catch (error) {
        userErrors(error, dispatch);
    }
}

export const setUsername = (username) => (dispatch) =>{
    try {        
        dispatch({
            type: Set_User_Username,
            payload: username
        })
    } catch (error) {
        userErrors(error, dispatch);
    }
}

export const setEmailId = (emailId) => (dispatch) =>{
    try {
        dispatch({
            type: Set_User_Email_Id,
            payload: emailId
        })
    } catch (error) {
        userErrors(error, dispatch);
    }
}

export const setFirstPassword = (password) => (dispatch) =>{
    try {        
        dispatch({
            type: Set_First_Password,
            payload: password
        })
    } catch (error) {
        userErrors(error, dispatch);
    }
}

export const setSecondPassword = (repeatPassword) => (dispatch) =>{
    try {        
        dispatch({
            type: Set_Second_Password,
            payload: repeatPassword
        })
    } catch (error) {
        userErrors(error, dispatch);
    }
}

export const registerUser = (user) => async dispatch => {
    try {
        let res = await Axios.post(`/users/register-user`,user)
        dispatch({
            type: Register_User,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: Registration_Errors,
            payload: {error}
        })
    }
}

export const getUsernameOrEmailId = (usernameOrEmail) => (dispatch) =>{
    try {        
        dispatch({
            type: Get_Login_Username_Or_Email_ID,
            payload: usernameOrEmail
        })
    } catch (error) {
        userErrors(error, dispatch);
    }
}

export const getPassword = (password) =>  (dispatch) =>{
    try {        
        dispatch({
            type: Get_Login_Password,
            payload: password
        })
    } catch (error) {
        userErrors(error, dispatch);
    }
}

export const userLogin = (loginDetails) => async dispatch => {
    try {
        let res = await Axios.patch("/users/user-login",loginDetails)
        dispatch({
        type: Set_Login_Redirect,
        payload: res
        })
    } catch (error) {
        dispatch({
            type: Log_In_Error,
            payload: {error}
        })
    }
}

export const isUserLoggedIn = () => async (dispatch) => {
    try{
        let res = await api.patch(`/users/is-user-logged-in`)
        return await dispatch({
            type: Is_User_Logged_In,
            payload: res
        })  
    } catch (error) {
        dispatch({
            type: Is_User_Logged_In_Error,
            payload: {error}
        })
    }
}

export const setUserLogout = (user) => async dispatch => {
    try {        
        let res = await api.patch(`/users/user-logout`, user)
        return await dispatch({
            type: User_Logout,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: Log_Out_Error,
            payload: {error}
        })
    }
}

export const verifyCookies = () => async (dispatch) => {
    try {
        let res = await Axios.patch("/users/verify-cookies");
        dispatch({
            type: Verify_Cookies,
            payload: res
        })
    } catch (error) {
        console.log(error)
    }
}