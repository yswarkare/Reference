let str_01 = "0 1 2 3 4 5 6 7 8 9";
let arr_01 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let arr_02 = [ 42, 2.1, 0.6, 100, 66, -6, -0.2 ];


// Convert String to Array

const strToArr = (str, seperatedBy) => {
    let arr = str.split(seperatedBy);
    return arr;
}

//// strToArr(str_01, " ");

// Convert String to Array of Numbers

const strToArrOfNum = (str, seperatedBy = " ") => {
    let arr_01 = str.split(seperatedBy);
    let arr_02 = arr_01.map((value)=>{return parseInt(value)})
    return arr_02;
}

// console.log(strToArrOfNum(str_01, " "));

// Convert Array To String

const arrToStr = (arr, seperatedBy = " ") => {
    let str = arr.join(seperatedBy);
    return str;
}

// arrToStr(arr_01);

// Sort an Unsorted Array

const sortArrOfNum = (arr_01) => {
    let arr_02 = arr_01.sort((a, b)=>(a-b));
    return arr_02;
}

// console.log(sortArrOfNum(arr_02));


const sortArrOfNumDec = (arr_01) => {
    let arr_02 = arr_01.sort((a, b)=>(b-a));
    return arr_02;
}

// console.log(sortArrOfNumDec(arr_02));