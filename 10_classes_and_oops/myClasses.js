// ES6 (Jo kuch bhi JS kar rahe hai woh ES6 ke baad ki kahaani hai)

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@mail","1245") 

console.log(chai.encryptPassword());//1245abc
console.log(chai.changeUsername());//CHAI

//behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }
// const tea = new User("tea","tea@gmail.com","125")
// console.log(tea.changeUsername());
// console.log(tea.encryptPassword());