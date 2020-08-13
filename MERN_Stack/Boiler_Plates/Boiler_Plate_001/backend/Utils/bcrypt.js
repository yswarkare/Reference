const bcrypt = require("bcryptjs");


const hashPassword = async (user) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt)
        user.password = hash.toString()
        console.log(user.password)
        return ({success: true, message: "Password bcrypt successful.", user: user})
    } catch (err) {
        return ({success: false, message: "Failed to bcrypt password", error: `${err}`, errorType: "password"})
    }
}

const comparePassword = async (inputPassword, hashedPassword) => {
    try {
        let isMatch = await bcrypt.compare(inputPassword, hashedPassword);
        if (isMatch === false) {
            return ({success: false, message: "Password is incorrect.", errorType: "password"});
        }
        return ({success: true, message: "Password is correct."})
    } catch (err) {
        return ({success: false, message: "Failed to compare password.", error: {err}, errorType: "password"})
    }
}

module.exports = {
    hashPassword,
    comparePassword
}