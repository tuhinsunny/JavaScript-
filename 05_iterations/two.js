//! While loop

// let index = 0
// while (index <= 10){
//     console.log(`Value of Index is ${index}`);
//     // index++;
//     index+=2 //shorthand operator
// }

let myArray = ["flash", "arrow", "superman", "batman", "wonderwoman"];
let arr = 0
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr++
}
//? In while loop, the condition is checked first and then the statements are executed. If the condition is false, the loop will not be executed.

//! do while loop

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);

//* In do while loop at least one iteration will be executed even if the condition is false

