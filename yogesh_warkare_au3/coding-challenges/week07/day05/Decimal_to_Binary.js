function binary(num) {
    num = prompt("enter a number");
    decNum = parseInt(num);
    var remainder;
    biNum = "";
    while (decNum > 1) {
        remainder = decNum % 2;
        biNum = remainder + biNum;
        decNum = (decNum - remainder) / 2;
    }
    console.log(biNum);
}

binary();