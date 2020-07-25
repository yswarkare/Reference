const bcrypt = require("bcryptjs");


const hashPassword = async (user) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash.toString()
    console.log(user.password)
    return user
}

module.exports = {
    hashPassword
}