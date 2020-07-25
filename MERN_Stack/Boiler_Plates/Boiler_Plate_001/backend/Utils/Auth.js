const User = require("../Models/User");
const validator = require("validator");
const { hashPassword } = require("../Utils/bcrypt");
const { usernameExists, emailIdExists, validatePassword } = require("./Validators");


const registerUser = async (user, res) => {
    console.log(user);
    try {
        let doesUsernameExists = await usernameExists(user.username);
        if (doesUsernameExists === true) {
            return res.json({success: false, message: "Username already in use, try another"});
        }
        
        if (await validator.isEmail(user.emailId) === false) {
            return res.json({success: false, message: `${user.emailId} is not a valid email id.`})
        }

        let doesEmailIdExists = await emailIdExists(user.emailId);
        if (doesEmailIdExists === true) {
            return res.json({success: false, message: "Email ID already registered"});
        }
        console.log(user.password)
        let validPassword = await validatePassword(user.password);
        console.log(validPassword)
        if (validPassword.success === false) {
            return res.json(validPassword);
        }

        let user01 = await hashPassword(user)
        
        console.log(user01);

        const newUser = new User({
            firstName: user01.firstName,
            middleName: user01.middleName,
            lastName: user01.lastName,
            username: user01.username,
            emailId: user01.emailId,
            password: user01.password,
            userBio: user01.userBio
        })
        let user02 = await newUser.save()
        console.log(user02);
        return res.status(200).json({success: true, message: "User Registered Successfully!, Now you could login.", user: user02})
    } catch (err) {
        console.log(`${err}`)
        return res.status(400).json({success: false, message: "Failed to register user", error: `${err}`})
    }
}

const loginUser = async (user, res) => {

}


module.exports = {
    registerUser,
    loginUser
}