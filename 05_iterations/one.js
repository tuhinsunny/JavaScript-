//! for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5)
        console.log('5 is best number');
    //console.log(element);
}
//? In for loop , first the execution occurs in this manner :
//* initialization -> condition -> statements to be executed in the body of the loop -> increment/decrement

/*
for (let i = 0; i <=10; i++) {
    console.log(`Outer loop : ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner Loop value : ${j} and inner loop value : ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);
    }
    
}
*/

let myArray = ["flash", "arrow", "superman", "batman", "wonderwoman"];
for(let i = 0;i<myArray.length;i++){
    //console.log(myArray[i]);
}



//! break and continue statements

// for (let i = 1; i <=20; i++) {
//     if(i==5){
//         console.log('5 detected');
//         break; // It will come out of the loop
//     }
//     console.log(`Value of i is ${i}`);
// }


for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log('5 detected');
        continue; // It will skip 5 when 5 is detected
    }
    console.log(`Value of i is ${i}`);
}
