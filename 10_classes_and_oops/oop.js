//* Object Literal
/*
const user = {
    username: "Tuhin",
    loginCount : 0,
    signedIn : true,

    getUserDetails: function(){
        console.log('Got user details from Database');
        console.log(`Username : ${this.username}`); //this refers to the user object
        console.log(this);
        //this will output:
        // {
        //     username: 'Tuhin',
        //     loginCount: 0,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
    }
    //? Whenever we talk about this keyword, we mean current context
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //{}
*/

//* Constructor Function

// const promiseOne = new Promise()
const date = new Date();
//!  new keyword is a constructor function
//? Constructor function allows us to create multiple instances of the same object

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    //this.username this.loginCount this.isLoggedIn act as variables

    // this.greeting = function(){
    //     console.log(`Welcome ${this.username}`);
    // }
    return this; // Even if we don't return this , it will automatically be returned
}
// const userOne = User("Tuhin", 5, true);
// const userTwo = User("Chai Aur Code",11, false)
// console.log(userOne); // Even if we are printing userOne, In output we will get the values of userTwo as userTwo overwrites userOne

//* To prevent this, we use the new keyword thus creating multiple instances of the same object
const userOne = new User("Tuhin", 5, true);
const userTwo = new User("Chai Aur Code",11, false)
// console.log(userOne); //User { username: 'Tuhin', loginCount: 5, isLoggedIn: true }
// console.log(userTwo); // User { username: 'Chai Aur Code', loginCount: 11, isLoggedIn: false }
console.log(userOne.constructor); //[Function: User]

//Instanceof
// Website link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
console.log(userOne instanceof User); //true
console.log(userTwo instanceof User); //true
console.log(userOne instanceof Date); //false
console.log(userOne instanceof Object); //true
