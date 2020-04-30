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
    let salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.admin.password, salt);
    const newAdmin = new Admins({
        firstName: req.body.admin.firstName,
        middleName: req.body.admin.middleName,
        lastName: req.body.admin.lastName,
        username: req.body.admin.username,
        emailId : req.body.admin.emailId,
        password : hashedPassword,
    });
    await newAdmin.save().then(admin => res.json(admin)).catch(err => console.log(err))
})

router.put("/:id", userAuth, async (req, res) => {
    let salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.admin.password, salt);
    Admins.findOneAndUpdate({_id: req.params.id}, {
        firstName: req.body.admin.firstName,
        middleName: req.body.admin.middleName,
        lastName: req.body.admin.lastName,
        username: req.body.admin.username,
        emailId : req.body.admin.emailId,
        password : hashedPassword,
    }).then(admin => res.json(admin)).catch(err => console.log(err))
})

router.delete("/:id", userAuth, async (req, res) => {
    await Admins.findOneAndRemove({_id: req.params.id})
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
    return res.json({admin});
})

router.get("/admin-by-id/", userAuth, async (req, res) => {
    let admin = await Admins.findOne({_id: req.body.user._id})
    return res.json(admin);
})


router.patch("/admin-logout", async (req, res) => {
    try {
        return res.json({message: "Admin Logged Out Successfully", success: true})
    } catch (err){
        res.json({message: "Admin Logout failed", success: false, error: err})
    }
})


module.exports = router;