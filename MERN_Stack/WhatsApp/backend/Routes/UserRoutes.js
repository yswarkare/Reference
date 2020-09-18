const express = require("express");
const router = express.Router();
const { verify } = require("jsonwebtoken");
const User = require("../Models/User");
const { registerUser, loginUser, verifyToken, jwtAuth, userAuth } = require("../Utils/Auth");


router.get("/get-all-users", userAuth, async (req, res) => {
    try {
        let users = await User.find()
        let allUsers = Object.assign({}, users)
        console.log(allUsers)
        return res.status(200).json({success: true, message: "Got All Users", users: users, allUsers: allUsers})
    } catch (err) {
        return res.json({success: false, message: "failed to get list of users", error: `${err}`})
    }
})

router.get("/get-all-other-users", userAuth, async (req, res) => {
    try {
        let allUsers = await User.find();
        let index_01;
        for (let i = 0; i < allUsers.length; i++){
            if (allUsers[i].username === req.user.username) {
                index_01 = i
            }
        }
        allUsers.splice(index_01, 1);
        let others = allUsers;
        return res.status(200).json({status: true, message: "got all other users", users: others, index_01: index_01});
    } catch (err) {
        return res.stauts(401).json({status: false, message: `failed to get other users \n ${err}`, error: {err}});
    }
});

router.post("/register-user", async (req, res) => {
    await registerUser(req.body.user, res);
})

router.patch("/user-login", async (req, res) => {
    await loginUser(req.body.user, res);
})

router.patch("/verify-token", async (req, res) => {
    let verify = await verifyToken(req.body.token);
    let jwtToken = await jwtAuth(req.body.token);
    console.log(jwtToken);
    if (verify.success === true) {
        return res.json(verify);
    } else {
        return res.json(verify);
    }
})

router.patch("/verify-cookies", async (req, res) => {
    console.log("cookies", req.cookies)
    let verify = await verifyToken(req.cookies.bearerToken);
    if (verify.success === true) {
        return res.json(verify);
    } else {
        return res.json(verify);
    }
})

router.patch("/is-user-logged-in", userAuth, async (req, res) => {
    try {
        console.log(req.user);
        res.setHeader("Authorization", req.cookies.bearerToken)
        return res.json({success: true, message: "User is logged in", user: req.user})
    } catch (error) {
        console.log(`${err}`)
        return res.json({success: false, message: "User is not logged in", error: `${err}`})
    }
})

router.patch("/user-logout", userAuth, async (req, res) => {
    try {
        res.cookie("bearerToken", null)
        res.setHeader("Authorization", "")
        return res.json({success: true, message: "User logged out successfully."})
    } catch (err) {
        return res.json({success: false, message: "failed to logout user."})
    }
})

router.patch("/delete-user", async (req, res) => {
    try {
        let user = req.body.user;
        await User.findOneAndDelete({_id: user._id});
        return res.json({success: true, message: "User deleted successfully", user: user});
    } catch (err) {
        console.log({success: false, message: "failed to delete user", error: `${err}`});
        return res.json({success: false, message: "failed to delete user", error: `${err}`});
    }
})

module.exports = router
