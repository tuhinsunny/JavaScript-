//! for each loop

// const coding = ["JS ","Ruby", "Java", "JavaScript"]

// coding.forEach( function (item){ //this is a callback function so it does not have a name
//     console.log(item);
// } )

// coding.forEach( (item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) 

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
// Output :
// JS  0 [ 'JS ', 'Ruby', 'Java', 'JavaScript' ]
// Ruby 1 [ 'JS ', 'Ruby', 'Java', 'JavaScript' ]
// Java 2 [ 'JS ', 'Ruby', 'Java', 'JavaScript' ]
// JavaScript 3 [ 'JS ', 'Ruby', 'Java', 'JavaScript' ]


const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "java"
    },
    {
        languageName : "Ru",
        languageFileName : "ruby"
    },
    {
        languageName : "Ja",
        languageFileName : "java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})