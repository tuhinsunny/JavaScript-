//! reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)
// The value of acc (accumulator) is equal to accumulator + current value. Here 0 is given as the initial value of the accumulator

// Output : 
// acc: 0 and currVal: 1
// acc: 1 and currVal: 2
// acc: 3 and currVal: 3
// 6


const myTotal = myNums.reduce( (acc, currVal)=>acc+currVal,0) 


console.log(myTotal);


const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2999
    },
    {
        itemName : "DSA Course",
        price : 1699
    },
    {
        itemName : "Python Course",
        price : 999
    },
    {
        itemName : "UI Course",
        price : 4999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item)=>acc+item.price ,0)
console.log(priceToPay); //10696