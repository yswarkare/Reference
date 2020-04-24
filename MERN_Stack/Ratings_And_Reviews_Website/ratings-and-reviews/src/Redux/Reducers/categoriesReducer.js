import categoriesState from "../States/categoriesState";

let categoriesReducer = ( state = categoriesState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type){
        case "Set_Category_Name":
            stateCopy.category.categoryName = action.payload
            return stateCopy;

        case "Add_Category_Name":
            stateCopy.categories.push(stateCopy.category);
            // console.log(stateCopy);
            break

        default:
        console.log(stateCopy);
    }
    return state = JSON.parse(JSON.stringify(stateCopy));
}

export default categoriesReducer;