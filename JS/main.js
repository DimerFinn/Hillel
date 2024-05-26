function DataType() {
    let MyName = 'Dmytro';
    let MyAge = 45;
    let MyLifeTime = 14200704005245879665412364412665478963214;
    let MyCountry = 'Ukraine';
    let MyGenderMan = true;
    let MyNumberID = 123654;
    let MycriminalRecord = null;
    let Mychildrens = ['Vlada','Ivanna', 'Lana', 'Mykola'];
    console.log(MyName, ' - type of variable:', typeof MyName);
    console.log(MyAge,' - type of variable:', typeof MyAge);
    console.log(MyLifeTime,' - type of variable:', typeof MyLifeTime);
    console.log(MyCountry,' - type of variable:', typeof MyCountry);
    console.log(MyGenderMan,' - type of variable:', typeof MyGenderMan);
    console.log(MyNumberID,' - type of variable:', typeof MyNumberID);
    console.log(MycriminalRecord,' - type of variable:', typeof MycriminalRecord);
    console.log(Mychildrens,' - type of variable:', typeof Mychildrens);
};  
DataType();


const YourName = prompt('Enter Your Name');
const YourLastname = prompt('Enter Your Lastname');
const YourCountry = prompt('Enter Your Coutry');
console.log(YourName, YourLastname, YourCountry);




const number = prompt('Enter Number');
let array = Array.from(number.toString(), Number)
console.log(array.join(' '));