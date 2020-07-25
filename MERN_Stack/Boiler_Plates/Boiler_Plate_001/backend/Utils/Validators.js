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

const validatePassword = async (password) => {
    let errors = []
    try {
        if (password.length < 8) {
            errors.push("at least 8 characters");
        }
        if (password.search(/[A-Z]/g) < 0) {
            errors.push("at least one uppercase letter"); 
        }
        if (password.search(/[a-z]/g) < 0) {
            errors.push("at least one lowercase letter"); 
        }
        if (password.search(/[0-9]/g) < 0) {
            errors.push("at least one digit");
        }
        if (password.search(/[^a-zA-Z\d]/g) < 0){
            errors.push("at least one special character")
        }
        if (errors.length > 0) {
            console.table({success: false, message: "Your password must contain ",errors: `${errors}`});
            return ({success: false, message: "Your password must contain ",errors: `${errors}`});
        }
        console.table({success: true, message: "password is valid."});
        return ({success: true, message: "password is valid."});
    } catch (err) {
        console.log(`${err}`)
        return ({success: false, message: "failed to validate password. Password must be at least 8 characters, combinations of numbers, letters and special characters.", error: `${err}`});
    }
}

module.exports = {
    usernameExists,
    emailIdExists,
    validatePassword
}