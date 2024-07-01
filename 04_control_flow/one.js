// if 
/*
const isUserLoggedIn = true;

if(isUserLoggedIn){
    console.log('User is logged in');
}

if( 2=="2")
    console.log('Executed'); //Executed
else
    console.log('Not Executed');

if(2==="2")
    console.log('Executed');
else
    console.log('Not Executed'); //Not executed as it checks the data type as well
*/
    
// < , > , <= , >= , == , != , === (Strict Equal), !==

// const score = 100

// if(score >=100){
//     var power = "fly"
//     const hello = "Good"
//     console.log(`User power : ${power}`); //User power : fly
//     console.log(`${hello}`); // Good
// }
// console.log(`User power : ${power}`); //User power : fly
// console.log(`${hello}`); //Error : hello is not defined

//Thus, var can be accessed outside the block but const cannot be accessed outside the block 


// const balance = 1000
// if(balance>500) console.log('Test'), console.log('Test2'); 

// if(balance<500){
//     console.log('Less than 500');
// }
// else if(balance<750){
//     console.log('Less than 750');
// }
// else{
//     console.log('More than 750');
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){ 
    console.log('Allow to buy course');
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log('Allow to login'); //Allow to login
}
if(loggedInFromEmail && loggedInFromGoogle){
    console.log('Allow to login'); // Will not be Allow to login
}