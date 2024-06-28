// singleton 
//Object.create
//Jab bhi hum literals ki tarah declare karte hai to singleton nahi banta
//Constructor se banega to singleton banega

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "tuhin",
    "full name" : "Tuhin Chandra",
    // mySym: "myKey1",
    [mySym]:"myKey1", //For using it as a Symbol we put it inside 3rd brackets
    age : 25,
    location : "Kolkata",
    email : "tuhin@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "saturday"]   
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); // We cannot access this using dot because  there is a space in between
console.log(JsUser[mySym]); //myKey1
// console.log(typeof JsUser.mySym); //string

JsUser.email = "chatgpt.com"
// console.log(JsUser.email); //chatgpt.com
// Object.freeze(JsUser) //Due to this no changes will taKe place
// JsUser.email = "Hello@.com"
// console.log(JsUser.email); //chatgpt.com -> The value does not get change because it is freezed
// console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`); //Hello JS User, tuhin
}
console.log(JsUser.greeting());

