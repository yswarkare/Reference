const express = require("express");
const router = express.Router();

const Message = require("../Models/Message");
const User = require("../Models/User");
const Conversation = require("../Models/Conversation");
const { userAuth } = require("../Utils/Auth");

router.get("/unread", async (req, res) => {
    try {
        let messages_01 = await Message.find({
            receiver: req.body.user_id,
            read: false
        });
        return res.status(200).json({ status: true, message: "got unread messages", messages: messages_01 });
    } catch (err) {
        return res.status(401).json({ status: false, message: `failed to get unread messages \n ${err}`, error: {err} });
    }
});

router.get("/sent", async (req, res) => {
    try {
        let messages_01 = await Message.find({
            sender: req.body.user_id,
            receiver: req.body.friend_id
        });
        return res.status(200).json({ status: true, message: "got sent messages", messages: messages_01});
    } catch (err) {
        return res.status(401).json({ status: false, message: `failed to get sent messages \n ${err}`, error: {err} })
    }
});

router.post("/send-message", userAuth, async (req, res) => {
    try {
        let newMessage = new Message({
            text: req.body.text,
            sender: req.body.user_id,
            receiver: req.body.friend_id
        });
        let message_01 = await newMessage.save();
        // save for user
        let conversation_01 = await Conversation.findOne({
            sender: req.body.user_id,
            receiver: req.body.friend_id,
        });
        let messages_01 = conversation_01.messages;
        // if (conversation_01.messages) {
        //     messages_01 = conversation_01.messages;
        // } else {
        //     messages_01 = []
        // }
        messages_01.push({
            message: message_01._id,
            status: "sent",
            time: Date.now()
        });
        let conversation_03 = await Conversation.findOneAndUpdate({
            sender: req.body.user_id,
            receiver: req.body.friend_id,
        },{
            messages: messages_01
        });
        // save for reveiver
        let conversation_02 = await Conversation.findOne({
            sender: req.body.friend_id,
            receiver: req.body.user_id
        });
        let messages_02 = conversation_02.messages;
        // if (conversation_02.messages) {
        //     messages_02 = conversation_02.messages;
        // } else {
        //     messages_02 = []
        // }
        messages_02.push({
            message: message_01._id,
            status: "received",
            time: Date.now()
        });
        let conversation_04 = await Conversation.findOneAndUpdate({
            sender: req.body.friend_id,
            receiver: req.body.user_id
        },{
            messages: messages_02
        });
        return res.status(200).json({ status: true, message: "got conversation messages", message: message_01, conversation: conversation_03, second: conversation_04});
    } catch (err) {
        return res.status(401).json({ status: false, message: `failed to get conversation messages \n ${err}`, error: {err} });
    }
});

module.exports = router;