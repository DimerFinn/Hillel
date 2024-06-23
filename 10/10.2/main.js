let originalArray = [5, 21, 53, 46, 65, 86, 97, 28, 19, 13];
let evenArray = originalArray.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenArray);
