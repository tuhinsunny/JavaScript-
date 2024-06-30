const course ={
    coursename: "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor 

// const {courseInstructor} = course
// console.log(courseInstructor); //Hitesh

const {courseInstructor: instructor} = course
console.log(instructor); //Hitesh
//This is destructuring of object

//Jab hume apna kaam kisi aur ke sir pe daal dena hai to use hi APIs kehte hai
// Backend se hume kuch values aati hai use hum kaise likhte hai wahi APIs hai. 
// Pehle values XML structure mein ata tha lekin abhi JSON ke format mein ata hai.

// This is JSON structure 👇 Like objects
// {
//     "name" : "Hitesh",
//     "coursename" : "JS in Hindi",
//     "price" : "free"
// }

// Many times we get APIs in the form of Arrays : 
// [
//     {},
//     {},
//     {}
// ]

// JSON -> JavaScript Object Notation