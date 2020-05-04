import subCategoriesState from "../States/subCategoriesState";
import { Set_Sub_Category_Name, Add_Sub_Category_Name, Get_All_Sub_Categories, Update_Sub_Category_Name, Delete_Sub_Category, Edit_Sub_Category } from "../Actions/actionTypes"

let subCategoriesReducer = ( state = subCategoriesState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type){

        case Get_All_Sub_Categories:
            stateCopy.subCategories = action.payload.data
            console.log(stateCopy);
            return stateCopy

        case Set_Sub_Category_Name:
            stateCopy.subCategory.subCategoryName = action.payload;
            console.log(stateCopy);
            return stateCopy

        case Add_Sub_Category_Name:
            stateCopy.subCategories.push(stateCopy.subCategory);
            console.log(stateCopy);
            return stateCopy

        case Edit_Sub_Category:
            console.log(action.payload);
            stateCopy.editIndex = action.payload;
            console.log(stateCopy);
            return stateCopy;

        case Update_Sub_Category_Name:
            console.log(action.payload);
            let eIndex = stateCopy.editIndex;
            stateCopy.subCategories[eIndex].subCategoryName = action.payload.data.subCategory.subCategoryName;
            console.log(stateCopy);
            return stateCopy;

        case Delete_Sub_Category:
            console.log(action.payload);
            console.log(stateCopy);
            return stateCopy;

        default:
        return stateCopy;
    }
}

export default subCategoriesReducer;