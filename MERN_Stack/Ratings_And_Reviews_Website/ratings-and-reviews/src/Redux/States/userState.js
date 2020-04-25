let userState = {
    user : {
        firstName: "",
        middleName: "",
        lastName: "",
        userName: "",
        emailId : "",
        password : "",
        ratings: [],
        reviews: [],
        likedReviews: [],
        dislikedReviews: []
    },
    loginDetails:{
        usernameOrEmailId: "",
        password: ""
    },
    loginStatus: {
        loggedIn: false,
        userIsAdmin: false,
        loginRedirect: "",
        registrationRedirect: ""
    },
    inputErrors:{
        firstName: "",
        middleName: "",
        lastName: "",
        userName: "",
        emailId : false,
        password : false,
    },
    users: [],
    usersCopy: [],
    firstPassword: null,
}

export default userState;