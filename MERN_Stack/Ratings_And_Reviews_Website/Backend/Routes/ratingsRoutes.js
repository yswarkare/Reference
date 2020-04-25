const express = require("express");
const router = express.Router();
const { userAuth } = require("../Utils/Auth");

const Ratings = require("../Models/Ratings"); 

router.get("/", (req, res) => {
    Ratings.find()
    .them(rating =>  res.json(rating))
    .catch(err => console.log(err));
})

router.post("/", (req, res) => {
    const newRating = new Ratings({
        rating : req.body.rating
    });
    newRating.save().then(rating => res.json(rating)).catch(err => console.log(err))
})

router.put("/:id", (req, res) => {
    Ratings.findOneAndUpdate({_id: req.params.id}, {
        rating : req.body.rating
    }).then(rating => res.json(rating)).catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
    Ratings.findOneAndRemove({_id: req.params.id})
        .then(rating => res.json(rating))
        .catch(err => console.log(err));
})


router.get("/user-rating", userAuth, async (req, res) => {
    await Ratings.find()
    .them(rating =>  res.json(rating))
    .catch(err => console.log(err));
})

router.post("/user-rating", userAuth, async (req, res) => {
    const newRating = new Ratings({
        rating : req.body.rating,
        product: req.body.product,
        user: req.body.user
    }).populate("product").populate("user");
    await newRating.save().then(rating => res.json(rating)).catch(err => console.log(err))
})

router.put("/user-rating/:id", userAuth, async (req, res) => {
    await Ratings.findOneAndUpdate({_id: req.params.id}, {
        rating : req.body.rating,
        product: req.body.product,
        user: req.body.user
    }).populate("product").populate("user").then(rating => res.json(rating)).catch(err => console.log(err))
})

router.delete("/user-rating/:id", userAuth, async (req, res) => {
    await Ratings.findOneAndRemove({_id: req.params.id})
        .then(rating => res.json(rating))
        .catch(err => console.log(err));
})


module.exports = router;