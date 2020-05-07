let ratingsState = {
    rating: {
        rating: "0",
        product: "",
        user: "",
    },
    ratings: [],
    ratingsCopy: [],
    ratingErrors: {
        rating: {message: "", success: null},
        product: {message: "", success: null},
        user: {message: "", success: null},
    }
}

export default ratingsState;