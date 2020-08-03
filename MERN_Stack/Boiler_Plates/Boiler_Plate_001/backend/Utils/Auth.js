const User = require("../Models/User");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { strategy } = require("../Middlewares/Passport");
const { SECRET } = require("../Config/Config");
const { hashPassword, comparePassword } = require("./bcrypt");
const { usernameExists, emailIdExists, userExists, passwordRestrictions, validatePassword } = require("./Validators");

passport.use(
    strategy
);


const registerUser = async (userInfo, res) => {
    try {
        console.log(userInfo);
        // Remove white spaces from input user info
        let user = userInfo;
        user.firstName = userInfo.firstName.trim();
        user.middleName = userInfo.middleName.trim();
        user.lastName = userInfo.lastName.trim();
        user.username = userInfo.username.trim();
        user.emailId = userInfo.emailId.trim();
        user.password = userInfo.password.trim();

        // Check empty fields
        let errors = [];
        if (user.firstName === "") {
            errors.push("First name.")
        }
        if (user.middleName === "") {
            errors.push("Middle name.")
        }
        if (user.lastName === "") {
            errors.push("Last name.")
        }
        if (user.username === "") {
            errors.push("Username.")
        }
        if (user.emailId === "") {
            errors.push("Email ID.")
        }
        if (user.password === "") {
            errors.push("Password.")
        }
        if (errors.length > 0) {
            return res.json({success: false, message: "Following fields are empty", errors: errors});
        }

        // Check Username is already registered or not.
        let doesUsernameExists = await usernameExists(user.username);
        if (doesUsernameExists === true) {
            return res.json({success: false, message: "Username already in use, try another"});
        }

        // Validate Email ID.
        if (await validator.isEmail(user.emailId) === false) {
            return res.json({success: false, message: `${user.emailId} is not a valid email id.`})
        }

        // Check Email ID is already registered or not.
        let doesEmailIdExists = await emailIdExists(user.emailId);
        if (doesEmailIdExists === true) {
            return res.json({success: false, message: "Email ID already registered"});
        }

        // Check password restrictions
        let isPasswordAllowed = passwordRestrictions(user);
        if (isPasswordAllowed.success === false) {
            return res.json(isPasswordAllowed);
        }

        // Validate Password
        let validPassword = await validatePassword(user.password);
        if (validPassword.success === false) {
            return res.json(validPassword);
        }

        // Hash password using bcryptjs.
        let hashingPassword = await hashPassword(user);
        if (hashingPassword === false) {
            return res.json(hashingPassword);
        }
        let user01 = hashingPassword.user;

        // Create new user.
        const newUser = new User({
            firstName: user01.firstName,
            middleName: user01.middleName,
            lastName: user01.lastName,
            username: user01.username,
            emailId: user01.emailId,
            password: user01.password,
            userBio: user01.userBio
        })

        // Save newly created user.
        let user02 = await newUser.save()
        console.log(user02);
        return res.status(201).json({success: true, message: "User Registered Successfully!, Now you could login.", user: user02})
    } catch (err) {
        console.log(`${err}`);
        return res.status(400).json({success: false, message: "Failed to register user", error: `${err}`});
    }
}

const loginUser = async (userInfo, res) => {
    try {
        /// console.log(userInfo)
        let userData = userInfo;
        userData.usernameOrEmailId = userInfo.usernameOrEmailId.trim();
        userData.password = userInfo.password.trim();
        
        // Check and get user from database.
        let doesUserExists = await userExists(userData);
        //// console.log(doesUserExists)
        if (doesUserExists.success === false) {
            return res.json(doesUserExists);
        }
        let user = doesUserExists.user;

        // Compare and check Password.
        let passwordMatch = await comparePassword(userData.password, user.password);
        //// console.log(passwordMatch)
        if (passwordMatch.success === false) {
            return res.json(passwordMatch);
        }
        
        let token = jwt.sign({
            _id: user._id,
            username: user.username,
            emailId: user.emailId
        }, SECRET, {expiresIn: "1 day"})

        let loggedIn = {
            user: user,
            token: `Bearer ${token}`,
            expiresIn: "24 hr"
        }

        res.setHeader("Authorization", loggedIn.token)

        return res.cookie("bearerToken", loggedIn.token).json({success: true, message: "User logged in successfully", loggedIn: loggedIn})

    } catch (err) {
        return res.json({success: false, message: "Failed to login", error: `${err}`});
    }
}

const verifyToken = async (token) => {
    try {
        let bigToken
        if (token.includes(" ")) {
            bigToken = token.split(" ")
            token = bigToken[1]
        }
        var decoded = await jwt.verify(token, SECRET, {complete: true});
        return ({success: true, message: "Token verified", decoded});
    } catch(err) {
    return ({success: false, message: "Failed to verify token", error: `${err}`});
    }
}

const jwtAuth = async (token) => {
    try {
        let bigToken
        if (token.includes(" ")) {
            bigToken = token.split(" ")
            token = bigToken[1]
        }
        var decoded = await jwt.verify(token, SECRET, {complete: true});
        if (decoded) {
            return true;
        }
        return false
    } catch(err) {
    return false;
    }
}

const userAuth = passport.authenticate("jwt", {session: false});

module.exports = {
    registerUser,
    loginUser,
    verifyToken,
    jwtAuth,
    userAuth
}