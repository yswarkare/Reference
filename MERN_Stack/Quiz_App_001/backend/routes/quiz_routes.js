const express = require("express");
const router = express.Router();

const Quiz = require("../models/Quiz");

router.get("/get-all-quizzes", async (req, res) => {
    try {
        let quizzes = await Quiz.find();
        return res.status(200).json({ status: "success", message: "got all quizzes", quizzes: quizzes });
    } catch (err) {
        return res.status(401).json({ status: "failure", message: "failed to get all quizzes", error: {err} });
    }
});

router.post("/add-quiz", async (req, res) => {
    console.log(req.body);
    try {
        let newQuiz = new Quiz({
            name: req.body.quiz.name,
            description: req.body.quiz.description
        });
        let quiz = await newQuiz.save();
        return res.status(200).json({ status: "success", message: "quiz added successfully", quiz: quiz });
    } catch (err) {
        console.log({err});
        return res.status(401).json({ status: "failure", message: "failed to add quiz", error: {err} });
    }
});

router.get("/get-quiz/:quiz_id", async (req, res) => {
    try {
        let quiz = await Quiz.findOne({ _id: req.params.quiz_id });
        return res.status(200).json({ status: "success", message: "got quiz successfully", quiz: quiz });
    } catch (err) {
        return res.status(401).json({ status: "failure", message: "failed to get quiz", error: {err} });
    }
});

router.patch("/update-quiz/:quiz_id", async (req, res) => {
    try {
        let quiz = await Quiz.findOneAndUpdate({ _id: req.params.quiz_id },{
            name: req.body.quiz.name,
            description: req.body.quiz.description
        });
        return res.status(200).json({ status: "success", message: "quiz updated successfully", quiz: quiz });
    } catch (err) {
        return res.status(401).json({ status: "failure", message: "failed to update quiz", error: {err} });
    }
});

router.patch("/add-question/:quiz_id", async (req, res) => {
    try {
        let quiz_01 = await Quiz.findOne({ _id: req.params.quiz_id });
        let questions_01 = quiz_01.questions;
        questions_01.push(req.body.quiz.question_id);
        let quiz = await Quiz.findOneAndUpdate({
            _id: req.params.quiz_id
        },{
            questions: questions_01
        });
        return res.status(200).json({ status: "success", message: "question added to quiz successfully", quiz: quiz });
    } catch (err) {
        return res.status(401).json({ status: "failure", message: "failed to add question in quiz", error: {err} });
    }
});

module.exports = router;