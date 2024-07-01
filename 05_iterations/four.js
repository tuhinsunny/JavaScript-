const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

//! for in loop
// for in loop can iterate in objects
for (const key in myObject){
    console.log(key," ",myObject[key]);
}
//* Output :
// js   javascript
// cpp   C++
// rb   ruby
// swift   swift by apple

const programming = ["JS", "CSS", "Python","Java"]
for (const key in programming) {
    console.log(`${key} -> ${programming[key]}`);
}
//* Output
// 0 -> JS
// 1 -> CSS
// 2 -> Python
// 3 -> Java


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set("Fr", "France")

// Map is not iterable using for in
for(const key in map) {
    console.log(key);
}