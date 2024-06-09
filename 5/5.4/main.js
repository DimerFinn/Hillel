let x = prompt ('введіть число');;
function defPrimeNum (n) {
  if (n < 2) return false;
  if (n === 2) return true;
  for(let i = 3; i * i <= n; i+2) return !(n % i) ? false : true;
}
alert (defPrimeNum(x));