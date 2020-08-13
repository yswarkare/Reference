const validator = require("validator");
const User = require("../Models/User");

const usernameExists = async (username) => {
    try {
        let username_01 = await User.findOne({username: username});
        if (username_01) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(`${err}`);
        return err;
    }
}

const emailIdExists = async (emailId) => {
    try {
        let emailId_01 = await User.findOne({emailId: emailId});
        if (emailId_01) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(`${err}`);
        return err;
    }
}

const userExists = async (userInfo) => {
    try {
        let usernameOrEmailId = userInfo.usernameOrEmailId.trim();
        let user01 = await User.findOne({username: usernameOrEmailId});
        let user02 = await User.findOne({emailId: usernameOrEmailId});
        if (user01) {
            return ({success: true, message: "User found by Username.", user: user01});
        } else if (user02) {
            return ({success: true, message: "User found by Email ID.", user: user02});
        } else {
            return ({success: false, message: "User doesn't exists.", errorType: "usernameOrEmailId"})
        }
    } catch (err) {
        return ({success: false, message: "Failed to check if user exist or not.", error: `${err}`});
    }
}

const passwordRestrictions = async (user) => {
    try {        
        let password = user.password.trim();
        let username = user.username.trim();
        let emailId = user.emailId.trim();
        if (password === username) {
            return ({success: false, message: "Don't user your Username as password.", errorType: "password"})
        }
        if (password === emailId) {
            return ({success: false, message: "Don't user your Email ID as password.", errorType: "password"})
        }
        return ({success: true, message: "Password is allowed.", errorType: "password"})
    } catch (err) {
        return ({success: false, message: "Failed to restrict password.", error: `${err}`, errorType: "password"})
    }
}

const validatePassword = async (inputPassword) => {
    try {
        let errors = []
        let password = inputPassword.trim();
        if (password.length < 8) {
            errors.push(" at least 8 characters");
        }
        if (password.search(/[A-Z]/g) < 0) {
            errors.push(" at least one uppercase letter"); 
        }
        if (password.search(/[a-z]/g) < 0) {
            errors.push(" at least one lowercase letter"); 
        }
        if (password.search(/[0-9]/g) < 0) {
            errors.push(" at least one digit");
        }
        if (password.search(/[^a-zA-Z\d]/g) < 0){
            errors.push(" at least one special character")
        }
        if (errors.length > 0) {
            console.table({success: false, message: "Your password must contain ", errors: `${errors}`});
            return ({success: false, message: "Your doesn't contain", errors: `${errors}`, errorType: "password"});
        }
        console.table({success: true, message: "password is valid."});
        return ({success: true, message: "password is valid.", errorType: "password"});
    } catch (err) {
        console.log(`${err}`)
        return ({success: false, error: `${err}`, errorType: "password", message: "failed to validate password. Password must be at least 8 characters, combinations of numbers, letters and special characters."});
    }
}

module.exports = {
    usernameExists,
    emailIdExists,
    userExists,
    passwordRestrictions,
    validatePassword
}