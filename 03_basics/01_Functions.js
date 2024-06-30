// function sayMyName() {
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("R");
//     console.log("J");
//     console.log("H");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){ //Here number1 and number2 are parameters
//     console.log(number1+number2);
// }

function addTwoNumbers1(number1, number2) {
    // let result = number1+number2;
    // return result;
    return number1 + number2;
    console.log('Tuhin'); // This will never be executed as value has already been returned
}


// addTwoNumbers(1, 2); //3  . Here 1 and 2 are arguments
// addTwoNumbers(3, "4"); //34
// addTwoNumbers(3,"a"); //3a 
// addTwoNumbers(3,null);//3

// const result = addTwoNumbers(5,6) 
// console.log(result); //Undefined . The function is not returning value. So on printing the result it will be undefined

const res = addTwoNumbers1(10, 14)
console.log(res); //24. Here the value is returned so value is printed



function loginUserMessage(username) {
    // if(username == undefined){
    //     console.log('Please enter a username');
    //     return;
    // }
    if(!username){
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Tuhin"));  //Tuhin just logged in
//console.log(loginUserMessage()); // undefined just logged in . So we add an if statement in the function 
console.log(loginUserMessage()); //Please enter a username


//We can add a default value in order to prevent the above scenario
function loginUserMessage2(username = "Sam") {
    return `${username} just logged in`
}
console.log(loginUserMessage2()); //Sam just logged in
console.log(loginUserMessage2("Tuhin")); //Tuhin just logged in