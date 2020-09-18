import conversationState from "../States/Conversation_Sate";
import { Write_Message, Send_Message, Get_Conversation, Catch_Error } from "../Actions/Action_Types";

const conversationReducer = (state = conversationState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {

        case Write_Message:
        console.log(action.payload);
        stateCopy.message.text = action.payload;
        console.log(stateCopy);
        return stateCopy;

        case Send_Message:
        console.log(action.payload);
        console.log(stateCopy);
        return stateCopy;

        case Get_Conversation:
        console.log(action.payload);
        stateCopy.conversation = action.payload.data.conversation;
        stateCopy.friend = action.friend;
        console.log(stateCopy);
        return stateCopy;

        case Catch_Error:
        console.log(action.payload);
        return stateCopy;

        default:
        return stateCopy;
    }
}

export default conversationReducer;