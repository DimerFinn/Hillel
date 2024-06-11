let MyArr = [1, 'Lemon', 3, 4, 'Aple', 6, 7, 8];
alert (MyArr);
let sum = 0;
let counter = 0;
for (let i = 0; i < MyArr.length; i++ ) {
    if (typeof MyArr[i] === "number"){
        sum +=Number(MyArr[i]);
        counter ++;
}
}
console.log(sum/counter);

