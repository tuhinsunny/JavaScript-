/*
let score = "33abc";
let score1 = null
let score2 = undefined

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score) //string to number
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN

let value= Number(score1)
console.log(value); //0

let value1= Number(score2)
console.log(value1); //NaN
*/

// "33" => 33
// "33abc" => NaN
// true =>1 ; false =>0;
/*
let isLoggedIn = 1
let isLoggedIn1 = ""
let isLoggedIn2 = "Tuhin"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true because 1 means true

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1); //false

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2); //true

// 1=> true; 0=> false
// "" =>false
// "Tuhin" => true
*/
/*
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber); //string
*/
// ***************************************** Operations *********************************

let value = 3
let negValue = -value
// console.log(negValue); //-3

// console.log(2+2); //4
// console.log(2-2); //0
// console.log(2*2); //4
// console.log(2**3); //8
// console.log(2/3); //0.6666666666666666
// console.log(2%3); //2

// let str1 = "Hello"
// let str2 = "Tuhin"
// let str3 = str1 + " " + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

console.log(true); //true
console.log(+true); //1
// console.log(true+); // Not possible 
console.log(+""); //0

let num1,num2,num3;
num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
gameCounter ++;
console.log(gameCounter); //101
console.log(++gameCounter); //102

//Link to study
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment