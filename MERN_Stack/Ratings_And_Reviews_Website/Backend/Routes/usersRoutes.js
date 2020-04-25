const express = require("express");
const router = express.Router();
const { success, error } = require("consola");
const Users = require("../Models/Users"); 
const { userRegistration, userLogin, userAuth } = require("../Utils/Auth");
const bcrypt = require("bcryptjs");
const { getUserByEmailOrUsername } = require("../Utils/Validations");


router.get("/", async (req, res) => {
    try {
        await Users.find()
        .then((users) => {res.json(users)})
    } catch {
        (err => console.log(err))
    };
})

router.post("/", async (req, res) => {
    let salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
    const newUser = new Users({
        fullName : {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName
        },
        userName: req.body.userName,
        emailId : req.body.emailId,
        password : hashedPassword
    });
    newUser.save().then(user => res.json(user)).catch(err => console.log(err))
})

router.put("/:id", async (req, res) => {
    let salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
    Users.findOneAndUpdate({_id: req.params.id}, {
        fullName : {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName
        },
        userName: (req.body.userName).toLowerCase(),
        emailId : req.body.emailId,
        password : hashedPassword
    }).then(user => res.json(user)).catch(err => console.log(err))
})

router.delete("/:id", async (req, res) => {
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
    await userRegistration(req.body, res);
})

router.post("/user-login", async (req, res) => {
    await userLogin(req.body, res);
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

module.exports = router;