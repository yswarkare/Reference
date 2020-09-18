const express = require("express");
const router = express.Router();

const Conversation = require("../Models/Conversation");
const { userAuth } = require("../Utils/Auth");

router.post("/get-conversation", userAuth, async (req, res) => {
    try {
        let conversation_00;
        let conversation_03;
        let conversation_04;
        let conversation_01 = await Conversation.findOne({
            sender: req.body.user_id,
            receiver: req.body.friend_id
        }).populate({path:"messages", populate: [{ path: "message", model: "message"}]});
        console.log("conversation_01 " + conversation_01);
        if (conversation_01 === null) {
            let newConversation_01 = new Conversation({
                sender: req.body.user_id,
                receiver: req.body.friend_id,
            });
            let conversation_01 = await newConversation_01.save();
            conversation_03 = await Conversation.findOne({_id: conversation_01._id}).populate("sender", "receiver");
            
            conversation_00 = conversation_01;
            console.log("conversation_01 " + conversation_01);
            let newConversation_02 = new Conversation({
                sender: req.body.friend_id,
                receiver: req.body.user_id
            });
            let conversation_02 = await newConversation_02.save();
            conversation_04 = await Conversation.findOne({_id: conversation_02._id}).populate("sender", "receiver");
            console.log("conversation_02 " + conversation_02);
        } else {    
            conversation_00 = conversation_01;
        }
        return res.status(200).json({ status: true, message: "got conversation successfully", conversation: conversation_00, conversations: { conversation_03, conversation_04 }});
    } catch (err) {
        return res.status(401).json({ status: false, message: `failed to get conversation \n ${err}`, error: {err} });
    }
});

router.post("/start", async (req, res) => {
    try {
        let newConversation_01 = new Conversation({
            sender: req.body.user_id,
            receiver: req.body.frined_id,
        });
        let conversation_01 = newConversation_01.save();

        let newConversation_02 = new Conversation({
            sender: req.body.frined_id,
            receiver: req.body.user_id
        });
        let conversation_02 = newConversation_02.save();
        return res.status(200).json({ status: true, message: "conversations successfully created", conversations: { ...conversation_01, ...conversation_02} });
    } catch (err) {
        return res.status(401).json({ status: false, message: `\n ${err}`, error: {err} });
    }
});

module.exports = router;