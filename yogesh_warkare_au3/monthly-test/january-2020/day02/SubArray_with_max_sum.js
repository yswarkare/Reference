const subArr = (arr, k) => {
    if (k > arr.length) return "invalid length";
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    let nextSum = maxSum;
    for (let i = k; i < arr.length; i++) {
        nextSum = nextSum - arr[i - k] + arr[i];
        maxSum = Math.max(nextSum, maxSum);
    }
    return maxSum;
}

console.log(subArr([2, 3, 4, 1, 5, 4, 5, 8, 9, 12, 3], 5));

// Time Complexity O(2n)
// Space Complexity O(1)