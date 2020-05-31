
/*
let name = prompt("Enter your name");
alert(`Hello ${name}`);
*/

/*
let yearOfBirth = prompt("Enter your year of birth");
const yearNow = 2020;
let result = 2020 - yearOfBirth;
alert(`Your age ${result}`);
*/

/*
let length = prompt("Enter the length of the square");
let p = length * 4;
alert(p);
*/

/*
let r = prompt("Enter the radius of the circle");
let s = r * r * 3.14;
alert(s);
*/

/*
let km = prompt("Enter distance");
let hour = prompt("Enter hour");
let v = km / hour;
alert(`your speed ${v} km/hour`);
*/

/*
let usd = prompt("dollars");
const course = 0.9;
let eur = usd * course;
alert(eur);
*/

/*
let flashVolume = prompt("Enter flash drive volume");
let mb = flashVolume * 1024;
alert(Math.floor(mb / 820));
*/
/*
let money = +prompt("Enter your money");
let coastOneChocolate = prompt("Enter coast one chocolate");
let chocolateAll = money / coastOneChocolate;
let y = chocolateAll - ~~chocolateAll;
alert(~~chocolateAll);
alert(y);
*/

/*
let number = prompt("Enter your number");
let x = number % 10;
let y = number - x;
let z = y / 10;
let a = z % 10;
let b = z - a;
let c = b / 10;
let result = String(x) + String(a) + String(c);
alert(result);
*/

let number = prompt(" Enter your number");
(number % 2 == 0) && alert("Четное число");
(number % 2 != 0) && alert("Нечетное число");