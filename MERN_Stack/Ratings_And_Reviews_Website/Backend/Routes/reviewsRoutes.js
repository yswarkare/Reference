const express = require("express");
const router = express.Router();

const Reviews = require("../Models/Reviews"); 

router.get("/", (req, res) => {
    Reviews.find()
    .them(reviews =>  res.json(reviews))
    .catch(err => console.log(err));
})

router.post("/", (req, res) => {
    const newReview = new Reviews({
        review : req.body.review,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        date: req.body.date
    });
    newReview.save().then(review => res.json(review)).catch(err => console.log(err))
})

router.put("/:id", (req, res) => {
    Reviews.findOneAndUpdate({_id: req.params.id}, {
        review : req.body.review,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        date: req.body.date
    }).then(review => res.json(review)).catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
    Reviews.findOneAndRemove({_id: req.params.id})
        .then(review => res.json(review))
        .catch(err => console.log(err));
})

module.exports = router;