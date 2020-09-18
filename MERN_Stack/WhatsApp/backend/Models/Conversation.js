const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: "users" },
    receiver: { type: Schema.Types.ObjectId, ref: "users" },
    messages: [{
        message: { type: Schema.Types.ObjectId, ref: "messages" },
        status: { type: String, enum: ["sent", "reveived"] },
        time: { type: Date, default: Date.now() }
    }]
},{
    timestamps: true
});

const Conversation = mongoose.model("conversation", conversationSchema);

module.exports = Conversation;