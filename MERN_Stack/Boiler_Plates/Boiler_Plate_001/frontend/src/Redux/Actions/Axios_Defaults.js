import axios from "axios";
// import Cookies from "js-cookie";

const userCookies = document.cookie.split("; ")

const getUserCookies = () => {
    // console.log(Cookies.get("userToken"));
    console.log(userCookies);
}

getUserCookies()

// Cookies.get("userToken"),

export var defaults = {
    baseURL: `/api`,
    headers: {
        "Authorization": "",
        "Content-Type": "application/json"
    }
} 

export const api = axios.create(defaults);

export const Axios = axios.create({
    baseURL: `/api`,
})