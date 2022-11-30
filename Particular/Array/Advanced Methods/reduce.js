/**
 * reduce()
 * 
 * Executes a reducer function against each item in an array, 
 * returning a single value
 * 
 * The returned value is the a ccumulated value 
 * 
 * reduce(): syntax
 * 
 * array.reduce(function (accumulator, currentValue, index, array), initalValue)
 * 
 * array.reduce((acc, el, index, array), initialValue)
 * 
 * accumulator(acc): required, accumulated value or total
 * currentValue(el): required, element being processed in the array
 * index: optional, index of the currentvalue
 * array: optional, original array being iterated over
 * initialValue: optional, value to use for the initial accumulator;
 * if nothing is passed, the first value of array is used
 */

// const sales = [2.50, 4, 5.50, 1.75, 2, 2.50, 6];
// const totalSales = sales.reduce((total, amount) => total + amount);
// console.log(totalSales);


const bills = [1200, 29.99, 65.93, 17.32, 44.76];
// Determine how much the total bills are using the reduce method 
const totalBills = bills.reduce((total, bill) => total + bill);
console.log(totalBills);