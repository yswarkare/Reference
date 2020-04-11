function printNumbers(m, n){
    let range = (n - m);
    let array = []
    for (let i = 0; i < (range); i++){
        m = m + 1;
        array.push(m);        
    }
    console.log(array);
    // console.log(JSON.stringify(array));
    let arrayOdd = [];
    for (let j = 0; j < array.length; j = j+2) {
        arrayOdd.push(array[j]);
    }
    console.log(arrayOdd);
    let arrayEven= [];
    for (let j = 1; j < array.length; j = j+2) {
        arrayEven.push(array[j]);
    }
    console.log(arrayEven);
    let arr1 = [];
    for(let k = 0; k<= arrayOdd.length; k= k+2){
        arr1.push(arrayOdd[k],arrayEven[k]);
    }
    arr1.pop();
    arr1.pop();
    console.log(arr1);
    // console.log(JSON.stringify(arr1));
    let arr2 = [];
    for(let l = 1; l< arrayOdd.length; l= l+2){
        arr2.push(arrayOdd[l],arrayEven[l]);
    }
    console.log(arr2);
    // console.log(JSON.stringify(arr2));
    console.log(arr1.length);
    console.log(arr2.length);

}

printNumbers(0,100);
// printNumbers(100,200);
// printNumbers(200,300);
// printNumbers(300,400);
// printNumbers(400,500);
// printNumbers(500,600);
// printNumbers(600,700);
// printNumbers(700,800);
// printNumbers(800,900);
// printNumbers(900,1000);