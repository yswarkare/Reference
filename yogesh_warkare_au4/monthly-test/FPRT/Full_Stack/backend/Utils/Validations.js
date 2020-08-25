const User = require("../Models/User");

// const validator = require("validator");

// Validate Unique Username

const validateUsername = async (username) => {

    let user = await User.findOne({username: username});
    if(user){
        return true
    } else {
        return false
    }
}

// Validate Unique Email ID

const validateEmailId = async (emailId) => {

    let user = await User.findOne({emailId: emailId});
    if(user){
        return true
    } else {
        return false
    }
}

const validateUser = async (userData) => {
    
    if(userData.username){
        let user = await User.findOne({username: userData.username})
        if(user){
            return true
        }
    } else if (userData.emailId){
        let user = await User.findOne({emailId: userData.emailId})
        if(user){
            return true
        }
    } else {
        return false
    }
}

const getUserByEmailOrUsername = async (userData) => {
    
    if(userData.username){
        let user = await User.findOne({username: userData.username})
        if(user){
            return user;
        }
    } else if (userData.emailId){
        let user = await User.findOne({emailId: userData.emailId})
        if(user){
            return user;
        }
    } else {
        return false
    }
}

module.exports = {
    validateUser,
    validateEmailId,
    validateUsername,
    getUserByEmailOrUsername,
}