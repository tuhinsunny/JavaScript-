const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);
// Output:
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: "Ginger chai",
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log('Chai nahi bani');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//     value: 'Ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

Object.defineProperty(chai, "name",{
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//     value: 'Ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} ${value}`); // name will not be printed as we have changed it to ennumerable : false
    }
}