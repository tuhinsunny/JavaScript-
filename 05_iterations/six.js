const coding = ["js", "ruby", "java", "python", "cpp"]

//* forEach does not return any value
// const values = coding.forEach((item)=>{
// console.log(item);
// return item;
// })

// console.log(values); //undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//* filter returns values
// const newNums = myNums.filter( (num)=> num>4)
// const newNums = myNums.filter( (num) => {
//     return num>4  //we use return because we have opened a scope which we di not do in case of the previous one
// })
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]


// const newNums = []
//the same above task using forEach instead of filter
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })

// console.log(newNums); //[ 5, 6, 7, 8, 9, 10

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
// const userBooks = books.filter((bk)=>bk.genre === 'Fiction') 
//Output for the above :
// [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },       
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }        
//   ]

// const userBooks = books.filter((bk)=>{
//    return bk.publish >= 2000
// })
// Output for these :
// [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     },
//     {
//       title: 'Book Eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
//   ]



console.log(userBooks);
