import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


let productState = {
    product: {
        productName: "Asus Zenfone Max",
        sellingPrice: "5000",
        negotiable: "Yes",
        productCategory: "Mobile",
        sellerName: "Stewie Griffin",
        sellerContactNumber: "909090",
        city: "New York"
    },
    products: [{
        productName: "Asus Zenfone Max",
        sellingPrice: "5000",
        negotiable: "Yes",
        productCategory: "Mobile",
        sellerName: "Stewie Griffin",
        sellerContactNumber: "909090",
        city: "New York"
    },{
        productName: "HP 15-bs579tx",
        sellingPrice: "36000",
        negotiable: "No",
        productCategory: "Laptop",
        sellerName: "Steven Smith",
        sellerContactNumber: "808080",
        city: "Los Angeles"
    },{
        productName: "Samsung",
        sellingPrice: "6000",
        negotiable: "No",
        productCategory: "Mobile",
        sellerName: "John Watson",
        sellerContactNumber: "606060",
        city: "New York"
    }],
    categories: ["Mobile", "Laptop", "Headphones", "TV", "Fridge", "AC", "Vacuum Cleaner"],
    cities: ["New York", "London", "Paris", "Hong Kong", "Berlin", "Minsk", "Los Angeles"],
    productsCopy: undefined,
    filterCategory: "All",
    filterCity: "All",
    filterMaxPrice: "",
    editProduct: false,
    editIndex: "",
    editID: ""
}

function productReducer(state = productState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state));
    console.log("Actions here", action);
    console.log("state here", state);
    switch(action.type) {
        case "Set_Products_Array":
        stateCopy.products = action.payload;
        return stateCopy;

        case "Set_Categories_Array":
        stateCopy.categories = action.payload;
        return stateCopy;

        case "Set_Cities_Array":
        stateCopy.cities = action.payload;
        return stateCopy;

        case "Set_Product_Name":
        stateCopy.product.productName = action.payload;
        return stateCopy;

        case "Set_Selling_Price":
        stateCopy.product.sellingPrice = action.payload;
        return stateCopy;

        case "Set_Negotiable":
        stateCopy.product.negotiable = action.payload;
        return stateCopy;

        case "Set_Product_Category":
        stateCopy.product.productCategory = action.payload;
        return stateCopy;

        case "Set_Seller_Name":
        stateCopy.product.sellerName = action.payload;
        return stateCopy;

        case "Set_Seller_Contact_Number":
        stateCopy.product.sellerContactNumber = action.payload;
        return stateCopy;

        case "Set_City":
        stateCopy.product.city = action.payload;
        return stateCopy;

        case "Add_Product":
        let indexA = stateCopy.editIndex;
        if(stateCopy.editProduct === false){
            let product = {}
            product.productName = stateCopy.product.productName;
            product.sellingPrice = stateCopy.product.sellingPrice;
            product.negotiable = stateCopy.product.negotiable;
            product.productCategory = stateCopy.product.productCategory;
            product.sellerName = stateCopy.product.sellerName;
            product.sellerContactNumber = stateCopy.product.sellerContactNumber;
            product.city = stateCopy.product.city
            stateCopy.products.push(product);
        } else if (stateCopy.editProduct === true){
            stateCopy.products[indexA] = stateCopy.product
            console.log("Update product => "+ stateCopy.products);
        }
        stateCopy.editProduct = false;
        stateCopy.productsCopy = stateCopy.products;
        return stateCopy

        case "Filter_Category":
        let filteredProducts= [];
        stateCopy.filterCategory = action.payload;
        console.log("Type of filteredProducts => "+ (stateCopy.filteredProducts))
        if(stateCopy.productsCopy === undefined) {
            stateCopy.productsCopy = stateCopy.products;
        } else {
            stateCopy.products = stateCopy.productsCopy;
        }
            
        for (let i = 0; i < stateCopy.products.length; i++){
            if(stateCopy.products[i].productCategory === stateCopy.filterCategory){
                filteredProducts.push(stateCopy.products[i])
            } else if( stateCopy.filterCategory === "All"){
                filteredProducts = stateCopy.productsCopy;
            }
        }
        stateCopy.products = filteredProducts
        return stateCopy;

        case "Filter_Max_Price":
        let filteredByMaxPrice= [];
        stateCopy.filterMaxPrice = action.payload;
        console.log("Type of filteredByMaxPrice => "+ (stateCopy.filterMaxPrice))
        if(stateCopy.productsCopy === undefined) {
            stateCopy.productsCopy = stateCopy.products;
        } else {
            stateCopy.products = stateCopy.productsCopy;
        }
            
        for (let i = 0; i < stateCopy.products.length; i++){
            let num1 = parseInt(stateCopy.products[i].sellingPrice);
            let num2 = parseInt(stateCopy.filterMaxPrice)
            if(num1 < num2){
                filteredByMaxPrice.push(stateCopy.products[i]);
            } else if(stateCopy.filterMaxPrice === ""){
                filteredByMaxPrice = stateCopy.productsCopy;
            }
        }
        stateCopy.products = filteredByMaxPrice
        return stateCopy

        case "Filter_City":
        let filteredProductsByCity= [];
        stateCopy.filterCity = action.payload;
        console.log("Type of filteredProductsByCity => "+ (stateCopy.filterCity))
        if(stateCopy.productsCopy === undefined) {
            stateCopy.productsCopy = stateCopy.products;
        } else {
            stateCopy.products = stateCopy.productsCopy;
        }
            
        for (let i = 0; i < stateCopy.products.length; i++){
            if(stateCopy.products[i].city === stateCopy.filterCity){
                filteredProductsByCity.push(stateCopy.products[i])
            } else if( stateCopy.filterCity === "All"){
                filteredProductsByCity = stateCopy.productsCopy;
            }
        }
        stateCopy.products = filteredProductsByCity
        return stateCopy;

        // case "Edit_Product":
        // console.log("Edit Index => " + action.payload);
        // let id = action.payload;
        // let eIndex;
        // let products = stateCopy.products;
        // for (let i=0; i < products.length ; i++){
        //     if(products[i].id = id) {
        //         eIndex = i;
        //     }
        // }
        // stateCopy.editProduct = true;
        // stateCopy.editIndex = eIndex;
        // let indexE = stateCopy.editIndex;
        // stateCopy.editID = stateCopy.products[indexE].id;
        // stateCopy.product.productName = stateCopy.products[indexE].productName;
        // stateCopy.product.sellingPrice = stateCopy.products[indexE].sellingPrice;
        // stateCopy.product.negotiable = stateCopy.products[indexE].negotiable;
        // stateCopy.product.productCategory = stateCopy.products[indexE].productCategory;
        // stateCopy.product.sellerName = stateCopy.products[indexE].sellerName;
        // stateCopy.product.sellerContactNumber = stateCopy.products[indexE].sellerContactNumber;
        // stateCopy.product.city = stateCopy.products[indexE].city;
        // return stateCopy

        // case "Delete_Product":
        // console.log("Delete Index => "+ action.payload);
        // let dID = action.payload;
        // let index;
        // let productsD = stateCopy.products;
        // for (let i=0; i < productsD.length ; i++){
            //     if(productsD[i].id = dID) {
                //         index = i;
                //     }
                // }
                // stateCopy.products.splice(index, 1);
                // return stateCopy;

        default:
        return stateCopy
    }
}


const rootReducers = combineReducers({
    products: productReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;