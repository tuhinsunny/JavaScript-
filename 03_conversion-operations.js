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
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber); //string