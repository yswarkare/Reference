const user = {
    user: {
        _id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        emailId: "",
        password: "",
        userBio: ""
    },
    loginDetails: {
        usernameOrEmailId: "",
        password: ""
    },
    loginStatus: {
        loggedIn: false,
        userRole: null,
        loginRedirect: ""
    },
    passwords: {
        first: "",
        second: "",
        new: "",
        old: ""
    },
    errors: {
        registration: {
            firstName: {success: null, message: "Enter your first name"},
            middleName: {success: null, message: "Enter your middle name"},
            lastName: {success: null, message: "Enter your last name"},
            username: {success: null, message: "Choose an username"},
            emailId: {success: null, message: "Enter your email id"},
            firstPassword: {success: null, message: "Choose a password containing at least one lowercase, one uppercase letter, one digit and special character."},
            secondPassword: {success: null, message: "Enter the password again"},
            password: {success: null, message: ""},
        },
        logIn: {
            errorType: null,
            password: {success: null, message: "Enter your password"},
            usernameOrEmailId: {success: null, message: "Enter your username or email id"}
        },
        logOut: {success: null, message: null},
    }
}

export default user;