import { api } from "./axiosDefaults";
import { Get_User_Info } from "./actionTypes";

export const getUserInfo = () => async (dispatch) => {
    let res = await api.get("/users/get-user-info");
    dispatch({
        type: Get_User_Info,
        payload: res
    })
}