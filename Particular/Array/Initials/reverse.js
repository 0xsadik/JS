/**
 * reverse()
 * 
 * implementation: array.reverse()
 * important: the original array will be changed once reverse() is applied
 * 
 * 
 */



// const numbers = [0, 1, 2, 3];
// numbers.reverse()
// console.log(numbers);



const condiments = ['ketchup', 'mustard', 'relish', 'mayo'];
// use reverse to change the order of this array
// console.log(condiments.reverse());

const employees = ['fahim','shakil','torikus','munsi','arafat','A. halim'];
// use reverse to change the order of this array,
// but keep the original array intact.

const reversed = [...employees];
console.log('reversed one: ', reversed.reverse());
console.log('original one: ', employees);