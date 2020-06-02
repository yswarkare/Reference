const kthLargeElement = function(arr, k) {

    // Sorting array using compare function
    arr.sort(function(a, b) {
        return a - b;
    });

    console.log(arr);

    // Return kth element
    var result = arr[arr.length - k];

    console.log(result);
};

kthLargeElement([3,2,1,5,6,4], 2);
kthLargeElement([3, 2, 3, 1, 2, 0, 4, 5, 5, 6], 4);


// function processData(input) {
//     // console.log(input)
//     array1 = input.split("\n")
//     // console.log(array1)
    
//     let array = array1[0].split(' ').map(function(item) {
//         return parseInt(item, 10);
//     });
//     // console.log(array)
    
//     let k = array1[1];
    
//     array.sort(function(a, b) {
//         return a - b;
//     });

//     // console.log(array);

//     // Return kth element
//     var result = array[array.length - k];

//     console.log(result);
// } 