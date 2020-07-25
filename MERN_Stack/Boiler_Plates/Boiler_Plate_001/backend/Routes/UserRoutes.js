const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { registerUser, loginUser } = require("../Utils/Auth");


router.get("/get-all-users", async (req, res) => {
    try {
        let users = await User.find()
        let allUsers = Object.assign({}, users)
        console.log(allUsers)
        return res.json({success: true, message: "Got All Users", users: users, allUsers: allUsers})
    } catch (err) {
        return res.json({success: false, message: "failed to get list of users", error: `${err}`})
    }
})

router.post("/register-user", async (req, res) => {
    await registerUser(req.body.user, res);
})

router.patch("/login-user", async (req, res) => {
    await loginUser(req.body, res);
})

module.exports = router
