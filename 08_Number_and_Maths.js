// const score = 400
// console.log(score); //400

// const balance = new Number(100)
// console.log(balance); //[Number: 100]

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00

// const otherNumber = 23.8659
// const otherNumber1 = 12523.8659
// console.log(otherNumber.toPrecision(3)); //23.9
// console.log(otherNumber1.toPrecision(3)); //1.25e+4

// const hundreds = 10000000
// console.log(hundreds.toLocaleString()); //1,00,00,000
// console.log(hundreds.toLocaleString('en-IN')); //1,00,00,000
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);


// +++++++++++++++++ Maths +++++++++++++++++

console.log(Math); //Object [Math] {}
console.log(Math.abs(-4)); //4
console.log(Math.round(4.7)); //5
console.log(Math.ceil(4.1)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4,2,5,10)); //2
console.log(Math.random()); //Between 0 and 1 any random real number
console.log((Math.random()*10) +1); //from 1 to 10 any random number

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);//Any random numbers from 10 to 20
