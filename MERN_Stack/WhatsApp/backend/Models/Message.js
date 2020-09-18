const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: { type: String, max: 5000, trim: true },
    sender: { type: Schema.Types.ObjectId, ref: "user" },
    receiver: { type: Schema.Types.ObjectId, ref: "user" },
    read: { type: Boolean, default: false }
},{
    timestamps: true
});

const Message = mongoose.model("message", messageSchema);

module.exports = Message;