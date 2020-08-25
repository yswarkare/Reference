let commentState = {
    comment: {
        _id: "",
        commentText: "",
        blogPost: "",
        user: "",
    },
    comments: [],
    commentCopy: [],
    userCommentExists: false,
    editComment: false,
    commentErrors: {
        commentText: {message: "", success: null},
        blogPost: {message: "", success: null},
        user: {message: "", success: null},
    }
}

export default commentState;