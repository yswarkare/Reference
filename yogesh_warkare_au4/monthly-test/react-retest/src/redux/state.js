import { createStore, combineReducers} from "redux";

let productState = {
    product: {
        name: "Name",
        category: "",
        condition: "",
        sellingPrice: "000",
        bargain: "",
        city: ""
    },
    productList: [{
        name: "Asus Zenfone M1 Pro",
        category: "Mobile",
        condition: "Mint",
        sellingPrice: "10999",
        bargain: "No",
        city: "Mumbai"
    },{
        name: "Samsung Galaxy Z1",
        category: "Mobile",
        condition: "VeryGood",
        sellingPrice: "91099",
        bargain: "No",
        city: "Bengaluru"
    },{
        name: "AlineWare",
        category: "Laptop",
        condition: "Good",
        sellingPrice: "300000",
        bargain: "Yes",
        city: "Delhi"
    },{
        name: "HP",
        category: "Desktop",
        condition: "Decent",
        sellingPrice: "25000",
        bargain: "Yes",
        city: "Patna"
    }
    ],
    productListCopy: [],
}

let categoriesState = {
    categories: ["Mobiles", "Laptops", "Desktops", "Furniture", "Cutlery", "Automobiles", "Books", "Clothes"]
} 

let conditionState = {
    condition: [
        "Mint",
        "VeryGood",
        "Good",
        "Decent",
        "Poor",
        "VeryPoor"
    ]
} 

let citiesState = {
    cities: ["Bengaluru", "Mumbai", "Chennai", "Kolkata", "Vadodara", "Agra", "Delhi", "Patna"]
}

function productReducer(state = productState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state));
    
    console.log("Action => ", action.payload)
    console.log("state => ", state)

    switch(action.type) {
        case "Set_Name":
        stateCopy.product.name = action.payload;
        return stateCopy;

        case "Set_Selling_Price":
        stateCopy.product.sellingPrice = action.payload;
        return stateCopy;

        case "Set_Bargain_Status":
        stateCopy.product.bargain = action.payload;
        return stateCopy;

        case "Set_Category":
        stateCopy.product.category = action.payload;
        return stateCopy;

        case "Set_Condition":
        stateCopy.product.condition = action.payload;
        return stateCopy;

        case "Set_City":
        stateCopy.product.city = action.payload;
        return stateCopy;

        case "Add_Products_To_List":
        let productCopy = {}
        productCopy.name = state.product.name;
        productCopy.sellingPrice = state.product.sellingPrice;
        productCopy.bargain = state.product.bargain;
        productCopy.category = state.product.category;
        productCopy.condition = state.product.condition;
        productCopy.city = state.product.city;
        state.productList.push(productCopy)
        state.productListCopy.push(productCopy)      
        return stateCopy;

        default :
        return stateCopy;
    }
    //return state;
}

function categoriesReducer(state = categoriesState, action) {
    //let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type){

    }
    return state;
}

function conditionReducer(state = conditionState, action) {
    //let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type){

    }
    return state;
}

function citiesReducer(state = citiesState, action) {
    //let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type){

    }
    return state;
}

const rootReducers = combineReducers({
    product: productReducer,
    categories: categoriesReducer,
    condition: conditionReducer,
    cities: citiesReducer
});

const store = createStore(rootReducers);

export default store;