// Array.prototype.concat()

let arr1 = ['rakib', 'sakib', 'sumit'];
let arr2 = ['jalam', 'balam', 'nalam'];
let both = arr1.concat(arr2);
// console.log(both);

// concatenating values to an array

const letters = ['a', 'b', 'c'];
const numeric = letters.concat(1, [2, 3], 4, 5);
// console.log(numeric);


// concatenating nested arrays

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);
// console.log(numbers);   // [ [ 1 ], 2, [ 3 ] ]

// let's modify the first element of num1 

num1[0].push(4);
console.log(numbers);