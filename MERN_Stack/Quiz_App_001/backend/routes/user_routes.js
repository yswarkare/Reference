const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/get-all-user", async (req, res) => {
    try {
        let users = await User.find()
        return res.status(200).json({ status: "success", message: "Got all users", users: users });
    } catch (err) {
        return res.status(401).json({ status: "failure", message: "Failed to get all users", error: {err} });
    }
});

router.post("/add-user", async (req, res) => {
    try {
        let newUser = new User({
            firstName: req.body.user.firstName,
            middleName: req.body.user.middlename,
            lastName: req.body.user.lastName,
            username: req.body.user.username,
            emailId: req.body.user.emailId,
            password: req.body.user.password
        });
        let user = await newUser.save();
        return res.status(200).json({status: "success", message: "user registered successfully", user: user})
    } catch (err) {
        return res.status(401).json({ status: "failure", message: "failed to add user", error: {err} })
    }
});

module.exports = router;