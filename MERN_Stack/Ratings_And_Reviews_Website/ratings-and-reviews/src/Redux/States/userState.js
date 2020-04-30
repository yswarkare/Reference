let userState = {
    user : {
        _id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        emailId : "",
        password : "",
        token: "",
        ratings: [],
        reviews: [],
        likedReviews: [],
        dislikedReviews: []
    },
    loginDetails:{
        username: "",
        emailId: "",
        password: ""
    },
    loginStatus: {
        emailId: "",
        username: "",
        loggedIn: false,
        userIsAdmin: false,
        loginRedirect: "",
        logoutRedirect: "",
        registrationRedirect: ""
    },
    headers: {
        "Authorization": "",
        "Content-Type": "application/json"
    },
    inputErrors:{
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        emailId : false,
        password : false,
    },
    getUserId: "",
    users: [],
    usersCopy: [],
    firstPassword: null,
}

export default userState;