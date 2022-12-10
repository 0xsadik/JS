
// -- function without  a parameter --

// function square() {
//     let num = 2;
//     let sq = num * num;
//     console.log(sq);
// }
// square();


// function addTwoNum() {
//     let num1 = 10;
//     let num2 = 20;
//     let sum = num1 + num2;
//     console.log(sum);
// }
// addTwoNum();


// -- Function returning value -- 

// function printFullName() {
//     let first = 'Torikus';
//     let last = 'Sadik';
//     let space = ' ';
//     let fullName  = first + space + last;
//     return fullName;
// }
// console.log(printFullName());


// -- function with a parameter -- 

// function areaOfCircle(r) {
//     let area = Math.PI * r * r;
//     return area;
// }
// console.log(areaOfCircle(10));



// -- function with two parameter -- 

// function sumOfTwoNum(num1, num2) {
//     result = num1 + num2;
//     return result;
// }
// console.log(sumOfTwoNum(10, 32));


// -- function with many parameters -- 

// function SumArrValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(SumArrValues(numbers));



// function arrSum(arr) {
//     let sum = 0;
//     for(let i = 0; i <= arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(arrSum(numbers));

// function totalCount(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// const nums = [1, 2, 3, 4, 5, 6, 7];
// console.log(totalCount(nums));


// function totalCount (arr) {
//     let sum = 0;
//     for (elem of arr) {
//         sum = sum + elem;
//     }
//     return sum;
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(totalCount(numbers));


// -- function with unlimited number of parameters

// function sumAllNums() {
//     console.log(arguments);
// }
// sumAllNums(1, 2, 3, 4, 5);



// function sumAllNums() {
//     let sum = 0;
//     for ( let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i];
//     }
//     console.log(sum);
// }
// sumAllNums(1, 2, 3, 4, 5);
// sumAllNums(11, 23, 21, 44, 22, 55, 66, 129);


// -- unlimited number of parameters in arrow function 

// const sumAllNums = (...args) =>  {  
//     console.log(args);
// }
// sumAllNums(1, 2, 3, 4);


// const sumAll = (...args) => {
//     let sum = 0;
//     for (elem of args) {
//         sum = sum + elem;
//     }
//     console.log(sum);
// }
// sumAll(1, 2, 3, 4, 5);



// -- anonymous function -- 

// const anonymousfunc = function() {
//     console.log(`I am an anonymous function and my value is stored in anonymousfunc`);
// }
// anonymousfunc();


// -- expresion function -- 

// const square = function(n) {
//     return n * n;
// }
// console.log(square(2));


// -- invoking function -- 

// (function(n) {
//     console.log(n * n)
// })(2);

// let square = (function(n) {
//     return n * n;
// })(10);
// console.log(square)





// == Arrow function == 

// const square = (n) => n * n;
// console.log(square(2));


// const changeToUpperCase = arr => {
//     const newArr = [];
//     for (const element of arr) {
//         newArr.push(element.toUpperCase());
//     }
//     return newArr;
// }
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
// console.log(changeToUpperCase(countries));



// -- function with default parameter -- 

const totalSum = (a = 5, b = 10) => {
    return a + b;
}
console.log(totalSum());
console.log(totalSum(10, 12));