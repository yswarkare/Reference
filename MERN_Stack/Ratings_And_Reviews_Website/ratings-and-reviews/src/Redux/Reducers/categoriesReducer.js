import categoriesState from "../States/categoriesState";
import {Set_Category_Name, Add_Category_Name, Get_All_Categories, Update_Category_Name, Delete_Category, Edit_Category } from "../Actions/actionTypes";

let categoriesReducer = ( state = categoriesState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type){

        case Set_Category_Name:
            stateCopy.category.categoryName = action.payload
            console.log(stateCopy)
            return stateCopy;

        case Get_All_Categories:
            stateCopy.categories = action.payload.data.categories;
            console.log(stateCopy)
            return stateCopy
            
        case Add_Category_Name:
            console.log(action.payload);
            stateCopy.categories.push(action.payload.data.category);
            console.log(stateCopy);
            return stateCopy;

        case Edit_Category:
            console.log(action.payload);
            stateCopy.editIndex = action.payload;
            console.log(stateCopy);
            return stateCopy;
    

        case Update_Category_Name:
            console.log(action.payload);
            let eIndex = stateCopy.editIndex;
            stateCopy.categories[eIndex].categoryName = action.payload.data.category.categoryName;
            console.log(stateCopy);
            return stateCopy;

        case Delete_Category:
            console.log(action.payload);
            console.log(stateCopy);
            return stateCopy

        default:
            return stateCopy
    }
}

export default categoriesReducer;