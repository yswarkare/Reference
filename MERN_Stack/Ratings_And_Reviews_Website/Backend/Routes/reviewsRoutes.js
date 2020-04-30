const express = require("express");
const router = express.Router();
const { userAuth } = require("../Utils/Auth")

const Reviews = require("../Models/Reviews"); 

router.get("/", (req, res) => {
    Reviews.find()
    .them(reviews =>  res.json(reviews))
    .catch(err => console.log(err));
})

router.post("/", (req, res) => {
    const newReview = new Reviews({
        review : req.body.review.review,
        likes: req.body.review.likes,
        dislikes: req.body.review.dislikes,
        date: req.body.review.date
    });
    newReview.save().then(review => res.json(review)).catch(err => console.log(err))
})

router.put("/:id", (req, res) => {
    Reviews.findOneAndUpdate({_id: req.params.id}, {
        review : req.body.review.review,
        likes: req.body.review.likes,
        dislikes: req.body.review.dislikes,
        date: req.body.review.date
    }).then(review => res.json(review)).catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
    Reviews.findOneAndRemove({_id: req.params.id})
        .then(review => res.json(review))
        .catch(err => console.log(err));
})

router.get("/user-review", userAuth, (req, res) => {
    Reviews.find()
    .them(reviews =>  res.json(reviews))
    .catch(err => console.log(err));
})

router.post("/user-review", userAuth, async (req, res) => {
    const newReview = new Reviews({
        review : req.body.review.review,
        likes: req.body.review.likes,
        dislikes: req.body.review.dislikes,
        date: req.body.review.date,
        product: req.body.review.product,
        user: req.body.review.user
    }).populate("product").populate("user");
    await newReview.save().then(review => res.json(review)).catch(err => console.log(err))
})

router.put("/user-review/:id", userAuth, async (req, res) => {
    await Reviews.findOneAndUpdate({_id: req.params.id}, {
        review : req.body.review.review,
        likes: req.body.review.likes,
        dislikes: req.body.review.dislikes,
        date: req.body.review.date,
        product: req.body.review.product,
        user: req.body.review.user
    }).populate("product").populate("user").then(review => res.json(review)).catch(err => console.log(err))
})

router.delete("/user-review/:id", userAuth, async (req, res) => {
    await Reviews.findOneAndRemove({_id: req.params.id})
        .then(review => res.json(review))
        .catch(err => console.log(err));
})

module.exports = router;