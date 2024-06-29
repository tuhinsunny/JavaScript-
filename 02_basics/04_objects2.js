// const tinderUser = new Object(); //This is a singleton object 
const tinderUser = {} //Another way of declaring object. This is a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "tuhin",
            lastname : "chandra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);//chandra

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = {obj1,obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } Here {} is the target and obj1 and obj2 are the source

const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }D

// console.log(obj3);

//Array of objects
const users = [
    {
        id : 1,
        email : 'foo@bar.com',
    },
    {
        id : 2,
        email : 'hello@gmail.com',
    },
    {
        id : 3,
        email : 'nfjnewo@gmail.com',
    }
]

console.log(users[1].email); //hello@gmail.com

console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] . Using this the keys are kept in an array
console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('email'));// false
console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true