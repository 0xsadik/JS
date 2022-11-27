//      order arrays with sort 


/**
 * sort()
 * 
 * by default, an array is sorted in ascending order.
 * 
 * compare function 
 * array.sor(function(a, b) {return a - b})
 * or 
 * array.sort((a, b) => {a - b})
 * 
 * the compare function can alter the sort order
 * The function can return a value of positive,negative, or zero.
 */


const pets = ['dog', 'cat', 'rabbit', 'hamster'];
// console.log(pets.sort());

// const grades = [88, 94, 72, 99, 53, 77];
// console.log(grades.sort());


// sort the following array from higest to lowest 
const grades = [88, 94, 72, 99, 53, 77];
// grades.sort((a, b) => b - a);
// console.log(grades);

// sort the following array from lowest to highest
grades.sort((a, b) => a - b);
console.log(grades);