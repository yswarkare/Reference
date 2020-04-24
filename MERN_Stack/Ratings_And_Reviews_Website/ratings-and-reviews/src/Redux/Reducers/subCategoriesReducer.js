import subCategoriesState from "../States/subCategoriesState";

let subCategoriesReducer = ( state = subCategoriesState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type){

        case "Set_Sub_Category_Name":
            stateCopy.subCategory.subCategoryName = action.payload;
            break


        case "Add_Sub_Category_Name":
            stateCopy.subCategories.push(stateCopy.subCategory)
            break

        default:
        console.log(stateCopy);
    }
    return stateCopy;
}

export default subCategoriesReducer;