const mongoose = require("mongoose");
const { model } = require("../../../Boiler_Plates/Plane_Starter/backend/models/User");

const Schema = mongoose.Schema;

const quizSchema = new Schema({
    name: { type: String, max: 200, require: true, trim: true },
    description: { type: String, max: 1000, trim: true },
    questions: [{ type: Schema.Types.ObjectId, ref: "question" }]
}, {
    timestamps: true
});

const Quiz = mongoose.Model("quiz", quizSchema);

module.exports = Quiz;