// const userEmail = "tuhin@gmail.com" //Got user email
// const userEmail = "" //Don't have user email
const userEmail = []//Got user email
// const userEmail = "0" // Got user email
// const userEmail = 0 // Don't have user email


if(userEmail)
    console.log('Got user email');
else
    console.log("Don't have user email");
    

// falsy values : 
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN 

//truthy values :
// "0", 'false', " ", [], {}, function(){} (Empty function) 

//to check array :
// if(userEmail.length === 0){
//     console.log('Array is Empty');
// }

// to check empty object :
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0)
//     console.log('Object is Empty');


// console.log(false == 0); //true
// console.log(false == ''); //true
// console.log(0=='');//true



// Nullish Coalescing Operator (??) : null undefined 

//The Nullish Coalescing Operator (??) in JavaScript is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. This operator is useful for assigning default values while avoiding the pitfalls of falsy values like 0, '' (empty string), or NaN being treated as null or undefined.

let val1 ;
// val1 = 5 ?? 10  //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 15 //10



console.log(val1);



//Ternary Operator

// condition ? true : false; 
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log('More than 80'): console.log('Less than 80'); //More than 80