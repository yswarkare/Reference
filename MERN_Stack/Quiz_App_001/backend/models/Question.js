const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: { type: String, max: 2000, require: true, trim: true },
    options: [{ type: String, max: 1000, trim: true }],
    answer: { type: Number, max: 2, trim: true},
    quizzes: [{ type: Schema.Types.ObjectId, ref: "quiz" }]
}, {
    timestamps: true
});

const Question = mongoose.Model("question", questionSchema);

module.exports = Question;