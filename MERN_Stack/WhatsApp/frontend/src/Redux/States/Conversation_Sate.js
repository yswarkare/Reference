const conversationState = {
    conversations: {

    },
    conversation: {
        messages: [
            {
                message: "message 1",
                status: "sent"
            },
            {
                message: "message 2",
                status: "received"
            },
            {
                message: "message 3",
                status: "sent"
            },
            {
                message: "message 4",
                status: "received"
            },
            {
                message: "message 5",
                status: "sent"
            }
        ]
    },
    messages: [{
        messages: [
            {
                message: "message 1",
                status: "sent"
            },
            {
                message: "message 2",
                status: "received"
            },
            {
                message: "message 3",
                status: "sent"
            },
            {
                message: "message 4",
                status: "received"
            },
            {
                message: "message 5",
                status: "sent"
            }
        ]
    }],
    message: {
        _id: "",
        text: "",
        sender: "",
        receiver: "",
        read: false,
        createdAt: ""
    },
    friend: {
        _id: ""
    }
}

export default conversationState;