/**
1)  Write a program to find the n-th ugly number.
	Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

	Example:
	Input: n = 10
	Output: 12

	Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

	Note:  
	1 is typically treated as an ugly number.
	n does not exceed 1690.
 */

maxDivide = (a, b) => {

    while((a % b) == 0){
        a = a / b;
    }
    return a;
}

isUgly = (num) => {
    num = maxDivide(num, 2);
    num = maxDivide(num, 3);
    num = maxDivide(num, 5);
    if(num == 1){
        return 1;
    } else {
        return 0;
    }
};

nthUglyNo = ( n ) => {
    let i = 1;
    let count = 1; 

    while (n > count){
        i += 1;
        if (isUgly(i)){
            count += 1
        }
    } 
    console.log(i); 
} 

nthUglyNo(8);