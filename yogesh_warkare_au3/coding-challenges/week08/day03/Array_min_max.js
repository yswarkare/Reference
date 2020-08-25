array = prompt("Enter numbers separated by space");
arr = array.split(" ");

function min() {
    var min = parseInt(arr[0]);
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = parseInt(arr[i]);
        }
    }
    console.log("min : " + min);
}

min();

function max() {
    var max = parseInt(arr[0]);
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = parseInt(arr[i]);
        }
    }
    console.log("max : " + max);
}

max();