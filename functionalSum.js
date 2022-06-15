function add(n) {
    let sub = function (x) {
        n += x;
        return sub;
    }
    sub.toString = function () {
        return n;
    }
}
console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());