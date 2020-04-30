import categoriesState from "../States/categoriesState";
import {Set_Category_Name, Add_Category_Name, Get_All_Categories, Update_Category_Name, Delete_Category} from "../Actions/actionTypes";

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
            stateCopy.categories.push(stateCopy.category);
            console.log(stateCopy)
            return stateCopy

        case Update_Category_Name:
            console.log(action.payload)
            return stateCopy;

        case Delete_Category:
            console.log(action.payload);
            return stateCopy

        default:
            return stateCopy
    }
}

export default categoriesReducer;