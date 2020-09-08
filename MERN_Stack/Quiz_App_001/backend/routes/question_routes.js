const express = require("express");
const router = express.Router();

const Question = require("../models/Question");
const Quiz = require("../models/Quiz");

router.get("/get-all-questions", async (req, res) => {
    try {
        let questions = await Question.find();
        return res.status(200).json({ status: "success", message: "got all questions successfully", questions: questions });
    } catch (err) {
        return res.status(401).json({ status: "failure", message: "failed to get questions", error: {err} });
    }
});

router.post("/add-question", async (req, res) => {
    try {
        let newQuestion = new Question({
            statement: req.body.question.statement,
            options: req.body.question.options,
            answer: req.body.question.answer,
            quiz: req.body.question.quiz
        });
        let question = await newQuestion.save();

        let quiz_01 = await Quiz.findOne({ _id: req.body.question.quiz });
        console.log(quiz_01);
        let questions_01 = quiz_01.questions;
        questions_01.push(question._id);
        let quiz = await Quiz.findOneAndUpdate({
            _id: req.body.question.quiz
        },{
            questions: questions_01
        });
        return res.status(200).json({ status: "success", message: "complete question added successfully", question: question, quiz: quiz });
    } catch (err) {
        console.log({err})
        return res.status(401).json({ status: "failure", message: `failed to add complete question ${err}`, error: {err} });
    }
});

router.patch("/update-question/:question_id", async (req, res) => {
    try {
        let question = await Question.findOneAndUpdate({
            _id: req.params.question_id
        }, { 
            statement: req.body.question.statement,
            options: req.body.question.options,
            answer: req.body.question.answer,
            quiz: req.body.question.quiz
        });
        return res.status(200).json({ status: "success", message: "question updated successfully", question: question });
    } catch (err) {
        return res.status(401).json({ status: "failure", message: "failed to update question", error: {err} });
    }
});

router.post("/add-question-statement", async (req, res) => {
    try {
        let newQuestion = new Question({
            statement: req.body.question.statement
        });
        let question = await newQuestion.save();        
        return res.status(200).json({ status: "success", message: "question statement added successfully", question: question });
    } catch (err) {
        return res.status(401).json({ status: "failure", message: "failed to add question statement", error: {err} });
    }
});

router.patch("/add-options/:question_id", async (req, res) => {
    try {
        let question_01 = await Question.findOneAndUpdate({ 
            _id: req.params.question_id
        }, { 
            options: req.body.options
        });
        return res.status(200).json({ status: "success", message: "question options added successfully", question: question_01 });
    } catch (err) {
        return res.status(401).json({ status: "failure", message: "failed to add optiona", error: {err} });
    }
});

module.exports = router;