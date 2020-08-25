// Recursive or Top Down approach
// Time Complexity O(n)
// Space Complexity O(n)

const factorialTd = (n) => {
    if (n === 0) {
        return 1;
    }

    return n * factorialTd(n - 1); //Here's the recursion

}

factorialTd(5);


// Iterative or Bottom Up approach
// Time Complexity O(n)
// Space Complexity O(1)

const factorialBu = (n) => {
    if (n == 0) {
        return 1;
    } else {
        product = 1;
        for (i = 1; i <= n; i++) {
            product *= i;
        }
        return product;
    }
    console.log(n);
}

factorialBu(5);