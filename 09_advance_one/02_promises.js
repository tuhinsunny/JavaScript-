// Promise is an object 
//Using resolve() values will be passed to .then
const promise1 = new Promise(function (resolve, reject) {
    //Do an aync task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task completed');
        resolve()
    }, 1000)
})
promise1.then(function () {
    console.log('Promise consumed');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 resolved');
})


const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})
promise3.then(function (user) {
    console.log(user);
})


const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Tuhin", Password: "12345" })
        }
        else {
            reject('ERROR : Something went wrong')
        }
    }, 1000)
})
promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log('Promise is either resolved or rejected'))
// this is promise chaining


const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", Password: "12345" })
        }
        else {
            reject('ERROR : JS went wrong')
        }
    }, 1000)
})
async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('E: ',error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))