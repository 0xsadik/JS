/**
 * Queue: First in, first out 
 * 
 * unshift() and shift()
 * 
 * Both of these array methods manipulate the length and contents of an array by adding or removing 
 * data to and from the begining of an aray
 * 
 * unshift()
 * array.unshift(element(s))
 * Returns length property of the newly changed array
 * 
 * 
 * shift()
 * array.shift()
 * Returns element removed from the beginning of the array
 */

const ages = [18, 33, 71, 29, 65, 62];
// how do we add 36 to the array of ages ?
ages.unshift(36);
// console.log(ages);

const holidays = ['Labor Day', 'Christmas', 'Hanakkuh', 'Independence Day'];
// How do we remove the first item from the holidays array?
// Store the element that is removed in a variable 

const shiftedValue = holidays.shift();
console.log('shifted value:', shiftedValue);
console.log('holidays:', holidays);
