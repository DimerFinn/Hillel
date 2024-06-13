function name(x) {
    return function(y) {
        return x * y;
    };
}

console.log(name(5)(2)); // Output: 10