//Primitve

// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outTemp = null
let userEmail;

console.log(typeof outTemp); //object

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId); //false
console.log(id); //Symbol(123)
console.log(anotherId); //Symbol(123)

const bigNumber = 12365478954516215255n
console.log(typeof bigNumber); //bigint

// Reference type or Non-Primitive

// Array, Objects, Functions

const heroes = ['Ironman', 'Thor', 'Hulk']
let myObj = {
    name: "Tuhin",
    age: 36,
}

const myFunction = function () {
    console.log('Hello World');
}
console.log(typeof myFunction); //function
console.log(typeof heroes); //object

// javascript is a dynamically typed language