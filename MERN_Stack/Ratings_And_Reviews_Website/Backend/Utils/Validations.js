const Users = require("../Models/Users");
const Admins = require("../Models/Admins");

// Validate Unique Username

const validateUserName = async (username) => {

    let user = await Users.findOne({userName: username});
    if(user){
        return true
    } else {
        return false
    }
}

// Validate Unique Email ID

const validateEmailId = async (emailId) => {

    let user = await Users.findOne({emailId: emailId});
    if(user){
        return true
    } else {
        return false
    }
}

const validateAdmin = async (userData) => {
    
    if(userData.userName){
        let admin = await Admins.findOne({userName: userData.userName})
        if(admin){
            return true
        }
    } else if (userData.emailId){
        let admin = await Admins.findOne({emailId: userData.emailId})
        if(admin){
            return true
        }
    } else {
        return false
    }
}

const getAdminByEmailOrUsername = async (userData) => {
    
    if(userData.userName){
        let admin = await Admins.findOne({userName: userData.userName})
        if(admin){
            return admin;
        }
    } else if (userData.emailId){
        let admin = await Admins.findOne({emailId: userData.emailId})
        if(admin){
            return admin;
        }
    } else {
        return false
    }
}

const validateUser = async (userData) => {
    
    if(userData.userName){
        let user = await Users.findOne({userName: userData.userName})
        if(user){
            return true
        }
    } else if (userData.emailId){
        let user = await Users.findOne({emailId: userData.emailId})
        if(user){
            return true
        }
    } else {
        return false
    }
}

const getUserByEmailOrUsername = async (userData) => {
    
    if(userData.userName){
        let user = await Users.findOne({userName: userData.userName})
        if(user){
            return user;
        }
    } else if (userData.emailId){
        let user = await Users.findOne({emailId: userData.emailId})
        if(user){
            return user;
        }
    } else {
        return false
    }
}



module.exports = {
    validateAdmin,
    validateUser,
    validateEmailId,
    validateUserName,
    getUserByEmailOrUsername,
    getAdminByEmailOrUsername
}