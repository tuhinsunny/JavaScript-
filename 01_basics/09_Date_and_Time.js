//Dates

// let myDate = new Date();
// console.log(myDate.toString()); //Fri Jun 28 2024 11:50:43 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Fri Jun 28 2024
// console.log(myDate.toLocaleString()); //28/6/2024, 11:53:59 am
// console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0 , 23)
// console.log(myCreatedDate.toString()) //Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
// let myCreatedDate2 = new Date(2023, 0 , 23,5,3)
// console.log(myCreatedDate2.toLocaleString()) //23/1/2023, 5:03:00 am
// let myCreatedDate3 = new Date("2024-05-26")
// console.log(myCreatedDate3.toLocaleString()) //26/5/2024, 5:30:00 am
// let myCreatedDate4 = new Date("05-26-2004")
// console.log(myCreatedDate4.toLocaleString()) //26/5/2004, 12:00:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp);  //1719556297128
console.log(myCreatedDate.getTime()); //1674412200000
console.log(Math.floor(Date.now()/1000)); //1719556378

let newDate = new Date()
console.log(newDate.toDateString()) //Fri Jun 28 2024
console.log(newDate.getMonth()+1);//6
console.log(newDate.getDay()); //5
console.log(newDate.getDate()); //28

newDate.toLocaleString('default',{
    weekday: 'long',
})