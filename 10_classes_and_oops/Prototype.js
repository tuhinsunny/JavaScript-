// let myName = "Tuhin     "]
// let myChannel = "chai    "

// console.log(myName.truelength)


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"Hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}

Object.prototype.tuhin = function(){
    console.log(`Tuhin is present in all objects`);
}

// heroPower.tuhin() //Tuhin is present in all objects
// myHeros.tuhin() //Tuhin is present in all objects

Array.prototype.heyTuhin = function(){
    console.log('Tuhin Says Hello');
}

// myHeros.heyTuhin()  //Tuhin Says Hello
// heroPower.heyTuhin()  //This will show error as it does not have access to heyTuhin()





//Inheritance

const user = {
    name : "Tuhin Chandra",
    email : "tuhin@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport={
    isAvailable : false
}
const TAsupport = {
    makeassignment : 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    // console.log(`${this}`); //ChaiAurCode
    // console.log(`${this.name}`); //undefined
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength() // True length is : 11
"tuhinchandra     ".trueLength() // True length is : 12
"iceTea".trueLength() //True length is : 6