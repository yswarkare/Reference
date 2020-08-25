/* -------------------------------------------------------------------------- */
/**
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3

Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

Example 2:

Input: m = 7, n = 3
Output: 28
*/
/* -------------------------------------------------------------------------- */


var uniquePaths = function(m, n) {
    var uniquePath = Array.from(Array(n), () => Array.from(Array(m)));
    console.log(uniquePath);
    if (m === 0 || n === 0) {
        return 0;
    }
    for (let i = 0; i < n; i++) {
        uniquePath[i][0] = 1;
    }
    for (let j = 0; j < m; j++) {
        uniquePath[0][j] = 1;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            uniquePath[i][j] = uniquePath[i - 1][j] + uniquePath[i][j - 1];
        }
    }
    console.log(uniquePath);
    return uniquePath[n - 1][m - 1];
}

console.log(uniquePaths(7, 3));

/* -------------------------------------------------------------------------- */