/**
 * some() and every()
 * 
 * Does the array contain some elements that pass the test?
 * Does every element in the array pass the test?
 * 
 * 
 * some()
 * 
 * Returns a boolean to indicate if an array contains some elements that match the criteria provided
 * 
 * every()
 * 
 * Returns a boolean to indicate if every element in the array matches the criteria provided
 * 
 * some() and every(): syntax
 * 
 * array.some(function(element, index, array), thisArg)
 * array.every(function(element, index, array), thisArg)
 */


const states = ['california', 'New York', 'New jersey', 'Alaska', 'New mexico', 'montana'];

// use this handy string method to find the solution: startsWith('New')

// Do some of the states in the array start with "New" ?
const someStates = states.some((state) => state.startsWith('New'));
// console.log(someStates);

// Does every state in the array start with "New"?
const everyState = states.every((state) => state.startsWith('New'));
console.log(everyState);
