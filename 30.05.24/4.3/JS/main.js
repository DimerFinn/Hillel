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
let isUsualCity = true;
for (let i = 0; i < arrUsers.length; i++) {
 if (YourCity === arrUsers[i].CapitalCity){
isUsualCity = false 
alert (`Твій вік ${YourAge} років, Ти живешь у столиці ${arrUsers[i].CountryName}`);}
 }

if(isUsualCity) { 
    alert (`Твій вік ${YourAge} років,Ти живешь у місті ${YourCity}`);}
