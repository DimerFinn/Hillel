function addByX (num) {
    return function(x) {
        return num + x;
    };
}
const addByTwo = addByX (2);
const addByFive = addByX (5);

console.log(addByTwo(3));
console.log(addByTwo(6));

console.log(addByFive(6));
console.log(addByFive(2));