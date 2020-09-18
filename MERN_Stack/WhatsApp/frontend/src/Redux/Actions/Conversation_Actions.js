import { api } from "./Axios_Defaults";
import { Write_Message, Send_Message, Get_Conversation, Catch_Error } from "./Action_Types";

export const writeMessage = (text) => async (dispatch) => {
    try {
        dispatch({
            type: Write_Message,
            payload: text
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: Catch_Error,
            payload: {error}
        });
    }
}

export const sendMessage = (message) => async (dispatch) => {
    try {
        let res = await api.post("/messages/send-message", message);
        dispatch({
            type: Send_Message,
            payload: res
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: Catch_Error,
            payload: {error}
        });
    }
}

export const getConversation = (conversation, friend) => async (dispatch) => {
    try {
        console.log(conversation)
        let res = await api.post("/conversations/get-conversation", conversation);
        dispatch({
            type: Get_Conversation,
            payload: res,
            friend: friend
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: Catch_Error,
            payload: {error}
        });
    }
}