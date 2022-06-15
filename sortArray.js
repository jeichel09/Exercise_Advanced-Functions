function solve(arr, order) {
    let sorted = arr.sort(function(a, b) {
        if (order === "asc") {
            return a - b;
        } else {
            return b - a;
        }
    });
}
solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');