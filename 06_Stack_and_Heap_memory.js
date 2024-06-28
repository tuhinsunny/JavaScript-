//Stack(Primitve) , Heap(Non-Primitive)

let myYoutubename = "tcgamings" //this will go in stack

let anothername = myYoutubename //only a copy of myYoutubename is stored here
anothername = "chai aur code"

console.log(myYoutubename); //tcgamings
console.log(anothername); //chai aur code

let userOne = {
    email : "user@gmail.com",
    upi : "user@bank.com",
}

let userTwo = userOne // The reference of the userOne is stored here. So if we make any changes here it will be reflected in userOne as well

userTwo.email = "tuhinsunny@gmail.com"
console.log(userOne.email); //tuhinsunny@gmail.com
console.log(userTwo.email); //tuhinsunny@gmail.com