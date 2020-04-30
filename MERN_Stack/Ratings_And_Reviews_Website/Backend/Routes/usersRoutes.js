const express = require("express");
const router = express.Router();
const { success, error } = require("consola");
const Users = require("../Models/Users"); 
const { userRegistration, userLogin, userAuth } = require("../Utils/Auth");
const bcrypt = require("bcryptjs");
const { getUserByEmailOrUsername, validateAdmin } = require("../Utils/Validations");


router.get("/", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        try {
            await Users.find()
            .then((users) => {res.json(users)})
        } catch {
            (err => console.log(err))
        };
    }else{
        return res.json({message: "User is not Admin", success: false})
    }
    
})

router.post("/", async (req, res) => {
    let salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.user.password, salt);
    const newUser = new Users({
        firstName: req.body.user.firstName,
        middleName: req.body.user.middleName,
        lastName: req.body.user.lastName,
        username: req.body.user.username,
        emailId : req.body.user.emailId,
        password : hashedPassword,
    });
    await newUser.save().then(user => res.json(user)).catch(err => console.log(err))
})

router.put("/:id", userAuth, async (req, res) => {
    let salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.user.password, salt);
    await Users.findOneAndUpdate({_id: req.params.id}, {
        firstName: req.body.user.firstName,
        middleName: req.body.user.middleName,
        lastName: req.body.user.lastName,
        username: (req.body.user.username).toLowerCase(),
        emailId : req.body.user.emailId,
        password : hashedPassword,
    }).then(user => res.json(user)).catch(err => console.log(err))
})

router.delete("/:id", userAuth, async (req, res) => {
    try {
        await Users.findOneAndRemove({_id: req.params.id})
        .then(() => res.json(success({ message:`User Account Deleted Successfully`, badge: true })))
    } catch {
        (err => res.status(404).json(error({ message: err, badge: true })))
    }
})

// User Session Routes

// User Registration
router.post("/user-registration", async (req, res) => {
    await userRegistration(req.body, res)
})

router.post("/user-login", async (req, res) => {
    await userLogin(req.body, res)
})

router.get("/user-profile", userAuth, async (req, res) => {
    await Users.populate("ratings").populate("reviews");
    let user = await getUserByEmailOrUsername(req.body)
    res.json({user});
})

router.get("/user-dashboard", userAuth, async (req, res) => {
    await Users.populate("ratings").populate("reviews");
    let user = await getUserByEmailOrUsername(req.body);
    res.json({user});
})

router.get("/user-by-id/", userAuth, async (req, res) => {
    let user = await Users.findOne({_id: req.body.user._id})
    return res.json(user)
})

router.patch("/user-logout", async (req, res) => {
    try {
        return res.json({message: "User Logged Out Successfully", success: true})
    } catch (err){
        res.json({message: "User Logout failed", success: false, error: err})
    }
})

router.get("/is-user-logged-in", userAuth, async (req, res) => {
    try {
        /* console.log("Response => ", req.user); */
        let userIsAdmin
        if( await validateAdmin(req.user) === true){
            userIsAdmin = true;
        } else {
            userIsAdmin = false
        }
        return res.json({userIsAdmin, success: true})
    } catch (err){
        return res.json({userIsAdmin: false, success: false, error: err})
    }
})

module.exports = router;