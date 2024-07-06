const myArr = []

// continuous , holey array 

//SMI (small integer)
//Packed Element
// Double (float, string, function)

// Array ke andar jo rakhte hai use elements kehte hai

const arr2 = [1, 2, 3, 4, 5]
// PACKED SMI ELEMENTS (They are best type of array)

arr2.push(6.0)
//PACKED DOUBLE ELEMENTS

arr2.push('7')
// PACKED ELEMENTS

arr2[10]=11
// HOLEY ELEMENTS (BBEcause it inludes multiple types)

console.log(arr2);
console.log(arr2.length);
console.log(arr2[9]);

//bound check
//hasOwnProperty(arr2,9)
//hasOwnProperty(arr2,prototype, 10)
//hasOwnProperty(Object.prototype, 10)

//Holes are very expensive in JS

// Console Output:
// [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
// 11
// undefined

const arr3 = [1,2,3,4,5];
console.log(arr3[2]);

//SMI is the highest optimized
// SMI > DOUBLE > PACKED
//H_SMI > H_DOUBLE > H_PACKED


const arr4 = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arr4[0] = '1'; //HOLEY_ELEMENTS
arr4[1] = '2'; //HOLEY_ELEMENTS
arr4[2] = '3'; //HOLEY_ELEMENTS

const arr5 = []
arr5.push('1') // PACKED_ELEMENTS
arr5.push('2') // PACKED_ELEMENTS
arr5.push('3') // PACKED_ELEMENTS


const arr6 = [1,2,3,4,5]

arr6.push(Infinity) // PACKED DOUBLE ELEMENTS

// for, for-of, forEach -<> It is recommended that we use these