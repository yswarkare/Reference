const express = require("express");
const router = express.Router();

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

module.exports = router;