const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","batman","wonderwoman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // arrays inside another array
// console.log(marvel_heroes[3]); //[ 'superman', 'batman', 'wonderwoman' ]
// console.log(marvel_heroes[3][1]); //batman

// const all_heroes = marvel_heroes.concat(dc_heroes) 
// console.log(all_heroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'wonderwoman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'wonderwoman' ]
//This is spread operator

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArray.flat(Infinity) //Makes the array flat
console.log(real_another_array); //[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Tuhin")); //false
console.log(Array.from("Tuhin")); //[ 'T', 'u', 'h', 'i', 'n' ]
console.log(Array.from({name:"Tuhin"})); //Interesting case . Output : []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]
