const Users = require("../Models/Users");
const Admins = require("../Models/Admins");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { SECRET } = require("../Config/config")
const { strategy } = require("../middlewares/passport");
const { validateAdmin, validateUser, validateEmailId, validateUserName } = require("./Validations");

passport.use(
    strategy
);

const userRegistration = async (userData, res) => {

    const userNameLowercase = (userData.userName).toLowerCase();
    const emailIdLowercase = (userData.emailId).toLowerCase();
    // Validate Username
    let userNameTaken = await validateUserName(userNameLowercase);
    if (userNameTaken) {
        return res.status(400).json({message: `Username already exists`, success: false});
    }

    // Validate Email ID 
    if(validator.isEmail(emailIdLowercase) === false){    
        return res.json({message: `${emailIdLowercase} is not an email ID`, success: false})
    }

    let emailIdRegistered = await validateEmailId(emailIdLowercase);
    if (emailIdRegistered){
        return res.status(400).json({message: `Email ID already Registered`, success: false});
    }

    // Create Hashed Password Function
    
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(userData.password, salt);


    const newUser = new Users({
        fullName : {
            firstName: userData.firstName,
            middleName: userData.middleName,
            lastName: userData.lastName
        },
        userName: userNameLowercase,
        emailId : emailIdLowercase,
        password : hashedPassword
    });
    await newUser.save().then(()=> {return res.status(201).json({
            message: `Congratulations! You're Successfully Registered now you could login`,
            success: true
        })}).catch((err)=>{
            console.log(err);
            return res.status(500).json({
                message: `Unable to Create Account`,
                success: false
        })})
}


const userLogin = async (userData, res) => {

    const userIsAdmin = await validateAdmin(userData);
    if (userIsAdmin === true){
        let admin;
        if(userData.userName){
            admin = await Admins.findOne({userName: userData.userName});
        }
        if(userData.emailId){
            admin = await Admins.findOne({emailId: userData.emailId})
        }
            let hashPassword = admin.password;
            let isMatch = await bcrypt.compare(userData.password, hashPassword);
            if(isMatch === true){
                let token = jwt.sign({
                    userId: admin._id,
                    userName: admin.userName,
                    emailId: admin.emailId
                }, SECRET, {expiresIn: "1 day"})
                
                let result = {
                    userId: admin._id,
                    userName: admin.userName,
                    emailId: admin.emailId,
                    token: `Bearer ${token}`,
                    expiresIn: 24
                }
                return res.status(200).json({
                    ...result,
                    message: `Welcome you're now logged in`,
                    success: true
                })
            } else {
            return res.status(403).json({
                message: `Incorrect Password`,
                success: false
            })
        }
    }

    const userExists = await validateUser(userData);
    if(userExists === false){
        return res.json({message:`user doesn't exists`});
    }
    
    let user;
    if(userData.userName){
        user = await Users.findOne({userName: userData.userName});
    }
    if(userData.emailId){
        user = await Users.findOne({emailId: userData.emailId})
    }
        // console.log("User in Logging route"+ user)
        let hashPassword = user.password;
        let isMatch = await bcrypt.compare(userData.password, hashPassword);
        if(isMatch === true){
            let token = jwt.sign({
                userId: user._id,
                userName: user.userName,
                emailId: user.emailId
            }, SECRET, {expiresIn: "1 day"})
            
            let result = {
                userId: user._id,
                userName: user.userName,
                emailId: user.emailId,
                token: `Bearer ${token}`,
                expiresIn: 24
            }
            return res.status(200).json({
                ...result,
                message: `Welcome you're now logged in`,
                success: true
            })
        } else {
        return res.status(403).json({
            message: `Incorrect Password`,
            success: false
        })
    }
}

const userAuth = passport.authenticate("jwt", {session: false});

module.exports = {
    userRegistration,
    userLogin,
    userAuth
}