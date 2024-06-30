// {}-> Scope of the function
// var c = 300
let a = 300
// The inner part is the block scope and the outer is the global scope
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    console.log(a); //10
}


console.log(a); //300
// console.log(b); // cannot be used outside the scope
// console.log(c); //30