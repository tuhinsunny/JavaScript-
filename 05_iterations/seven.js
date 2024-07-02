const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num)=>num+10)
// console.log(newNums); 

// const newNums = myNumbers.map((num) => {
//     return num + 10
// })
// console.log(newNums); 

// For both the above output will be : (10 will be added)
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]


//chaining
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num)=> num>=40)
console.log(newNums);

// Output :
// [
// 41, 51,  61, 71,
// 81, 91, 101
// ]