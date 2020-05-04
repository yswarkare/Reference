import subSubCategoriesState from "../States/subSubCategoriesState";
import { Set_Sub_Sub_Category_Name, Add_Sub_Sub_Category_Name, Get_All_Sub_Sub_Categories, Update_Sub_Sub_Category_Name, Delete_Sub_Sub_Category, Edit_Sub_Sub_Category } from "../Actions/actionTypes"
;
let subSubCategoriesReducer = ( state = subSubCategoriesState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    
    switch (action.type){

        case Get_All_Sub_Sub_Categories:
            stateCopy.subSubCategories = action.payload.data
            console.log(stateCopy);
            return stateCopy;

        case Set_Sub_Sub_Category_Name:
            stateCopy.subSubCategory.subSubCategoryName = action.payload;
            console.log(stateCopy);
            return stateCopy;

        case Add_Sub_Sub_Category_Name:
            stateCopy.subSubCategories.push(stateCopy.subSubCategory)
            console.log(stateCopy);
            return stateCopy;

        case Edit_Sub_Sub_Category:
            console.log(action.payload);
            stateCopy.editIndex = action.payload;
            console.log(stateCopy);
            return stateCopy;

        case Update_Sub_Sub_Category_Name:
            console.log(action.payload);
            let eIndex = stateCopy.editIndex;
            stateCopy.subSubCategories[eIndex].subSubCategoryName = action.payload.data.subSubCategory.subSubCategoryName;
            console.log(stateCopy);
            return stateCopy;

        case Delete_Sub_Sub_Category:
            console.log(action.payload);
            console.log(stateCopy);
            return stateCopy;

        default:
        return stateCopy;
    }
}

export default subSubCategoriesReducer;