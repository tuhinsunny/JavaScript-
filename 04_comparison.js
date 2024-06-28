//console.log(2>1); //true

// console.log('2'>1); //true
// console.log("02">1);//true
// We should make sure that while comparing the data types should be same 

// console.log(null>0); //false
// console.log(null==0); //false
// console.log(null>=0); //true
// The reason is that an equality check and comparisons > <
// work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.

// console.log(undefined>0); //false
// console.log(undefined==0); //false
// console.log(undefined>=0); //false

//=== -> checks values and data types both
console.log("2" === 2); //false
console.log('2' == 2); //true