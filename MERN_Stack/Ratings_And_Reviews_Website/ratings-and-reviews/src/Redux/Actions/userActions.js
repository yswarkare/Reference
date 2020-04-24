import axios from "axios"

let loginTheUser = async () => {
    await axios.post("localhost://5000/users/user-login")
}

let registerTheUser = async () => {
    await axios.post("localhost://5000/users/user-registration")
}

export default { loginTheUser, registerTheUser };