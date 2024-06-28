//array

const myArr = [1, 2, 3, 4, 5];

// console.log(myArr[0]); //1

//Whenever we do copy operations in JS it makes shallow copies.
// Shallow copy of an object is a copy whose properties share the same references as the original object. Copy by reference

// const myHeroes = ['Superman', 'Shaktimaan']
// const myArr2 = new Array(1,2,3,4)

// console.log(myArr2); //[ 1, 2, 3, 4 ]

// //Array methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop()
// console.log(myArr); //[ 1, 2, 3, 4, 5, 6 ]
// myArr.unshift(9)
// console.log(myArr); // 9 will be added in the first of the array
// myArr.shift()
// console.log(myArr); //9 will be removed from the array

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(-19)); //-1

// const newArr = myArr.join()
// console.log(myArr); //[ 1, 2, 3, 4, 5 ]
// console.log(newArr); // 1,2,3,4,5

// console.log(typeof myArr); //object
// console.log(typeof newArr); //string

// slice , splice

console.log('A ', myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log('B ', myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log('C ', myArr);
//splice manipulates the original array. It also substrings the array including the last digit