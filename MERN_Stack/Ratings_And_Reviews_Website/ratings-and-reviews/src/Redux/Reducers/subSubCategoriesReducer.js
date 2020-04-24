import subSubCategoriesState from "../States/subSubCategoriesState";

let subSubCategoriesReducer = ( state = subSubCategoriesState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    
    switch (action.type){

        case "Set_Sub_Sub_Category_Name":
            stateCopy.subSubCategory.subSubCategoryName = action.payload;
            break


        case "Add_Sub_Sub_Category_Name":
            stateCopy.subSubCategories.push(stateCopy.subSubCategory)
            break

        default:
        console.log(stateCopy);
    }
    return stateCopy;
    
}

export default subSubCategoriesReducer;