// Immediately Invoked Function Expressions (IIFE) 
//An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is defined and executed immediately after its creation. It is a design pattern used to encapsulate variables and functions, preventing them from polluting the global scope and providing a private namespace for variables. The syntax involves defining a function expression within parentheses, followed by another set of parentheses to immediately invoke it. This pattern is useful for creating modules or initializing code that runs once without leaving behind global variables or functions.

//Global scope ke pollution se kai bar problem hota hai to us global scope ke us variable ko pollution se hatane ke liye IIFE ko use karte hai 

(function chai(){
    //Named IIFE
    console.log("Database Connected");
})(); // We need to terminate this using semi colon

( ()=>{
    //Unnamed or Simple IIFE
    console.log("Database Connected");
} )();

( function aurcode(name){
    console.log(`Hello ${name}`); //Hello Tuhin
} )('Tuhin')

//In order to execute two IIFE termination of the previous IIFE is needed by using semicolon