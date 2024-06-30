/*
const user = {
    username : "Tuhin",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`); // this refers to the current context
        console.log(this);

    }
}

user.welcomeMessage() //Tuhin, Welcome to website
user.username = "Sam";
user.welcomeMessage() //Sam, Welcome to website
// The above will output this :👇
// Tuhin, Welcome to website
// {
//   username: 'Tuhin',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// Sam, Welcome to website
// {
//   username: 'Sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

console.log(this); // {}
*/


/*
function chai(){
    let username = "tuhin"
    console.log(this.username); //undefined . this can be used in objects. we cannot use it inside functions
}
chai()
*/
/*
const chai = function(){
    let username = "tuhin"
    console.log(this.username); //undefined
}*/
/*
const chai = () => {
    let username = "tuhin"
    console.log(this.username); //undefined
    console.log(this); //{}
}

chai()
*/

// +++++++++++++++++ Arrow Functions +++++++++++++++++++

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1,num2) =>num1 + num2; //Implicit return
// const addTwo = (num1, num2) => (num1 + num2);
// If curly brackets {} are used then return keyword likhna hi padega lekin agar () use huya to return keyword likhna nahi hoga 
// console.log(addTwo(2, 3)); //5


// returning objects :
const addTwo = (num1, num2) => ({sum : num1 + num2});
const addTwo2 = (num1, num2) => ({username : "Tuhin"});


console.log(addTwo(2,3)); // { sum: 5 }
console.log(addTwo2(2,5)); // { username: 'Tuhin' }




// const myArray = [1,2,3,4,5]
// myArray.forEach()