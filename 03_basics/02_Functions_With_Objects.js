function calculateCartPrice(...num1){ // Here ... is the rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500,2000)); //[ 200, 400, 500 ]

function calculateCartPrice2(val1 , val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200,400,500,2000)); //[ 500, 2000 ] 

const user = {
    username: "Tuhin",
    price : 199
}
//Passing object to a function 👇
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) //Username is Tuhin and price is 199
handleObject({
    username : "Sam",
    price:399
}) //Username is Sam and price is 399

//Passing array to function 
const arr = [200,400,1500,425]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(arr)); //400
console.log(returnSecondValue([200,100,125,2458]));//100