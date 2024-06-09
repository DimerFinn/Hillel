const input = [1,2,3,4,5,6,8,5];
alert (input);
const removeNumber = prompt ('яке число видалити?');
const result = input.filter(item => item != removeNumber);
alert(result);