// const name = "Tuhin"
// const repoCount = 50
// console.log(name + repoCount + " Value"); //Tuhin50 Value

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Hello my name is Tuhin and my repo count is 50 . Use this backtick wala method instead of + method

const gameName = new String('TuhinChandra')
// console.log(gameName); //[String: 'TuhinChandra']
// console.log(gameName[0]); //T
// console.log(gameName.__proto__); //for getting the prototypes

// console.log(gameName.length); //12
// console.log(gameName.toUpperCase()); //TUHINCHANDRA
// console.log(gameName.charAt(7)); //a
// console.log(gameName.indexOf('h')); //2

// const newString = gameName.substring(0,4)
// console.log(newString); //Tuhi

const anotherString = gameName.slice(-11,4)
console.log(anotherString);//uhi

const newStringOne = "     Tuhinsunny"
console.log(newStringOne); //     Tuhinsunny
console.log(newStringOne.trim()); //Tuhinsunny
 
const url = "https://www.google%25chandra.com"
console.log(url.replace("%25","-")); //https://www.google-chandra.com

console.log(url.includes("ttps")); //true
console.log(url.includes("sundar")); //false

const str = "tuhin-sunny-chandra"
console.log(str.split("-")); //[ 'tuhin', 'sunny', 'chandra' ]