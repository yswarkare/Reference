import usersState from "../States/UsersState";
import { Get_All_Conversations, Get_All_Friends } from "../Actions/Action_Types";

const usersReducer = (state = usersState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        
        case Get_All_Conversations:
        console.log(action.payload);
        stateCopy.allUsers = action.payload.data.users;
        console.log(stateCopy);
        return stateCopy;

        case Get_All_Friends:
        console.log(action.payload);
        stateCopy.allUsers = action.payload.data.users;
        let friends_01 = [];
        action.payload.data.users.map((friend)=>{
            return friends_01.push(friend.username);
        })
        stateCopy.friends = friends_01;
        console.log(stateCopy);
        return stateCopy;

        default:
        return stateCopy;
    }
}

export default usersReducer;