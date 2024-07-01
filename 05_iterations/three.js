//! for of

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5,6,7,8,9,10]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(greet);
// }

//! Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set("Fr", "France")

// console.log(map);

//* Output :
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

//? Map contains Unique values so if there are multiple same values it will contain it only once

for (const [key,value] of map) { //This is destructuring of the array and we can print the key and the values seperately now
    console.log(key); // IN , USA , Fr
}

const myObject = {
    'game1': "NFS",
    'game2': "FIFA"
}

// for (const [key,value] of myObject) {
//     console.log(key, " :- ",value);
// } Objects are not iterable using for of so this will be error