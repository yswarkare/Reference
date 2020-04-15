const express = require("express");
const router = express.Router();

const Users = require("../Models/Users"); 

router.get("/", (req, res) => {
    Users.find()
    .them(users =>  res.json(users))
    .catch(err => console.log(err));
})

router.post("/", (req, res) => {
    const newUser = new Users({
        fullName : {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName
        },
        userName: req.body.userName,
        emailId : req.body.emailId,
        password : req.body.password
    });
    newUser.save().then(user => res.json(user)).catch(err => console.log(err))
})

router.put("/:id", (req, res) => {
    Users.findOneAndUpdate({_id: req.params.id}, {
        fullName : {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName
        },
        userName: req.body.userName,
        emailId : req.body.emailId,
        password : req.body.password
    }).then(user => res.json(user)).catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
    Users.findById(req.params.id)
        .then(user => user.remove.then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false })))
})

module.exports = router;