const YourAge = prompt('Ведіть свій вік');
const YourCity = prompt('Введіть своє місто проживання');
const YourSport = prompt('Введіть улюблений вид спорту');  

let userUkraine = {
    CountryName: "України",
    CapitalCity: "Київ",
}
let userUSA = {
    CountryName: "США",
    CapitalCity: "Вашингтон",
}
let userEngland = {
    CountryName: "Англії",
    CapitalCity: "Лондон",
}
let arrUsers = [userUkraine, userUSA, userEngland];
let isUsualCity = true; //перемикач включений
for (let i = 0; i < arrUsers.length; i++) {
 if (YourCity === arrUsers[i].CapitalCity){
isUsualCity = false //виключаєм перемикач, бо знайшли столицю
alert (`Твій вік ${YourAge} років, Ти живешь у столиці ${arrUsers[i].CountryName}`);}
 }

if(isUsualCity) { //якщо перемикач все ще включений, значить столицю не знайшли, виводимо повідомлення про звичайне місто
    alert (`Твій вік ${YourAge} років,Ти живешь у місті ${YourCity}`);}
