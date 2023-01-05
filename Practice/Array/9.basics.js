// multi-dimensional array 

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
const subArr = arr[3];
const nestedSubArr = arr[3][0];
const element = arr[3][0][1];
console.log(subArr);
console.log(nestedSubArr);
console.log(element);