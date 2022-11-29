/**
 * flat() + map() = flatMap()
 * 
 * Create a new, flat array, where each monthly allowance amount is doubled
 * const allowance = [[20], [15], [18]];
 * flatMap()
 * 
 * Returns a new array by appliying a callback function to each item of the array, 
 * and then flattening it one level
 * 
 * flatMap(): syntax
 * let new = array.flatMap(function (currentValue, index, array), thisArg);
 * 
 */

//  const allowance = [[20], [15], [18]];
//  const doubleAllowance = allowance.flatMap((value) => [value * 2]);
//  console.log(doubleAllowance);



const wordJumble = ['shampoo', 'conditioner', 'soap'];

// You want to create a word jumble which requires you to split
// the following array of words into individual letters. You want 
// a new array, that is flattened to a single level.

const splitWords = wordJumble.flatMap((word) => word.split(''));
console.log(splitWords);



