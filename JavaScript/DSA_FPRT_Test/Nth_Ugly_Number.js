/* 
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Input Format

Single Integer n

Constraints

None

Output Format

Single integer denoting the n-th number

Sample Input 0

10
Sample Output 0

12
Explanation 0

1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
*/

nthUglyNo = ( n ) => {
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
    let i = 1;
    let count = 1; 

    while (n > count){
        i += 1;
        if (isUgly(i)){
            count += 1
        }
    } 
    console.log(i);
    return i;
} 

nthUglyNo(10);
