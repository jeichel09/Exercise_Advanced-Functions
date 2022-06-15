function solve() {
    let data = Array.from(arguments[0]);
    let result = {};
    for (let arg of data) {
        let type = typeof arg;
        if (!result.hasOwnProperty(type)) {
            result[type] = 1;
        } else {
            result[type] += 1;
        }
        console.log(`${type}: ${arg}`);
    }
    let resKeys = Object.entries(result).sort((a, b) => b[1] - a[1]);
    for (let el of resKeys) {
        console.log(`${el[0]} = ${el[1]}`);
    }
}
solve( ['cat', 42, 'kaez', 65, true, false, 'bastun40', 66, 77, function () { console.log('Hello world!'); }]);