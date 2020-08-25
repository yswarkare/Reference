function heapsAlgo(k, A) {
    if (k == 1) {
        return A.join('');
    }
    let out = []
    for (let i = 0; i < k; i++) {
        let f = heapsAlgo(k - 1, A);
        out = out.concat(f);
        if (i < k - 1) {
            k % 2 ? [A[0], A[k - 1]] = [A[k - 1], A[0]] : [A[i], A[k - 1]] = [A[k - 1], A[i]];
        }
    }
    return out
}

console.log(heapsAlgo(4, ['A', 'B', 'C', 'D']));