const express = require("express");
const router = express.Router();

const Admins = require("../Models/Admins"); 

router.get("/", (req, res) => {
    Admins.find()
    .them(admins =>  res.json(admins))
    .catch(err => console.log(err));
})

router.post("/", (req, res) => {
    const newAdmin = new Admins({
        fullName : {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName
        },
        userName: req.body.userName,
        emailId : req.body.emailId,
        password : req.body.password
    });
    newAdmin.save().then(admin => res.json(admin)).catch(err => console.log(err))
})

router.put("/:id", (req, res) => {
    Admins.findOneAndUpdate({_id: req.params.id}, {
        fullName : {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName
        },
        userName: req.body.userName,
        emailId : req.body.emailId,
        password : req.body.password
    }).then(admin => res.json(admin)).catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
    Admins.findById(req.params.id)
        .then(admin => admin.remove.then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false })))
})

module.exports = router;