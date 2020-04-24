const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { userAuth } = require("../Utils/Auth");
const { getAdminByEmailOrUsername } = require("../Utils/Validations")

const Admins = require("../Models/Admins"); 

router.get("/", async (req, res) => {
    try {
        await Admins.find()
        .then((admins) => {res.json(admins)})
    } catch {
        (err => console.log(err))
    };
})

router.post("/", async (req, res) => {
    console.log(req.body);
    let salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
    const newAdmin = new Admins({
        fullName: {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName
        },
        userName: req.body.userName,
        emailId : req.body.emailId,
        password : hashedPassword
    });
    await newAdmin.save().then(admin => res.json(admin)).catch(err => console.log(err))
})

router.put("/:id", async (req, res) => {
    let salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
    Admins.findOneAndUpdate({_id: req.params.id}, {
        fullName: {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName
        },
        userName: req.body.userName,
        emailId : req.body.emailId,
        password : hashedPassword
    }).then(admin => res.json(admin)).catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
    Admins.findOneAndRemove({_id: req.params.id})
        .then(admin => res.json(admin))
        .catch(err => console.log(err));
})

router.get("/admin-profile", userAuth, async (req, res) => {
    await Admins.populate("ratings").populate("reviews");
    let admin = await getAdminByEmailOrUsername(req.body);
    res.json({admin});
})

router.get("/admin-dashboard", userAuth, async (req, res) => {
    await Admins.populate("ratings").populate("reviews");
    let admin = await getAdminByEmailOrUsername(req.body);
    res.json({admin});
})


module.exports = router;