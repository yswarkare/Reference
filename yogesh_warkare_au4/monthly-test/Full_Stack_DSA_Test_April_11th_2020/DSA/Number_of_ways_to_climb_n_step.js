/**4) 
	You are climbing a stair case. It takes n steps to reach to the top.
	Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
	Note: Given n will be a positive integer.

	Example 1:
	Input: 2
	Output: 2

	Explanation: There are two ways to climb to the top.
	1. 1 step + 1 step
	2. 2 steps

	Example 2:
	Input: 3
	Output: 3

	Explanation: There are three ways to climb to the top.
	1. 1 step + 1 step + 1 step
	2. 1 step + 2 steps
	3. 2 steps + 1 step */

function stairs(n) {
    var fib = [0, 1];
    var nWays = [0, 1];
    for (var i = 2; i <= n + 1; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        nWays[i] = fib[i] + fib[i - 1];
    }
    //console.log(fib);
    console.log(nWays[n + 1]);
}

stairs(4)