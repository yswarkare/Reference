function heapsAlgo(k, A) {
    if (k == 1) {
        console.log(A);
        return 0;
    }
    for (let i = 0; i < k; i++) {
        heapsAlgo(k - 1, A)
        if (i < k - 1) {
            k % 2 ? [A[0], A[k - 1]] = [A[k - 1], A[0]] : [A[i], A[k - 1]] = [A[k - 1], A[i]];
        }
    }
}

console.log(heapsAlgo(3, ['A', 'B', 'C']));