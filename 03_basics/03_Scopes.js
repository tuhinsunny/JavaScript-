/*
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
*/

function one(){
    const username = "Tuhin"

    function two(){
        const website = "youtube"
        console.log(username); //Tuhin
    }
    // console.log(website); // will show error as website is out of scope
    two()
}
one()

if(true){
    const username = "Tuhin Chandra"
    if(username === "Tuhin Chandra"){
        const website = " youtube"
        console.log(username+website); //Tuhin Chandra youtube
    }
    // console.log(website); //will give error
}
// console.log(username); // will give error as username is not in scope


// ++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++ 

console.log(addone(5)); //6
function addone(num){
    return num + 1
}

addTwo(7) //will give error -> We are accessing before declaration
const addTwo = function(num){
    return num+2
}
// Hoisting is JavaScript's default behavior of moving declarations to the top.
