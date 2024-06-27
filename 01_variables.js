const accountId = 144553
let accountEmail = "tuhinHello@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //this is also possible
let accountState; //initial value is undefined

// accountId = 2 //Not allowed

accountEmail = "Hola@gmail.com" //Allowed 

console.log(accountId);
console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

/*
Prefer not to use var
because of issue in functional and block scope
*/