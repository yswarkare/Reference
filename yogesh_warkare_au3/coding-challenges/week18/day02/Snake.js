function snake(array) {
    return array.map((item, index) => index % 2 !== 0 ? item.reverse() : item).join().split(',');
}

console.log(snake([
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50]
]));