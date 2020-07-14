let blogPostState = {
    blogPost: {
        _id: "",
        blogPostText: "",
        user: "",
        comments: [],
        commentedUsers: [],
        likes: "",
        usersWhoLikedIt: []
    },
    blogPosts: [],
    blogPostCopy: [],
    userBlogPostExists: false,
    userBlogPosts: [{
        _id: "",
        blogPostText: "Dummy text",
        user: "",
        comments: [],
        commentedUsers: [],
        likes: "",
        usersWhoLikedIt: []
    }],
    editUserBlogPost: false,
    blogPostErrors: {
        blogPostText: {message: "", success: null},
        comments: {message: "", success: null},
        user: {message: "", success: null},
    }
}

export default blogPostState;