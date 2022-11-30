/**
 * Stack: last in, first out
 * 
 * push() and pop()
 * Both of these array methods manipulate the length and contents of an array by adding or removing 
 * data to and from the end of an array
 * 
 * push()
 * array.push(element(s))
 * returns length property of the newly changed array
 * 
 * pop()
 * array.pop()
 * Returns element removed from the end of the array
 * 
 */

const drinks = ['coffee', 'tea', 'soda', 'water'];
// How do we add "wine" to the aray of drinks ?
drinks.push('wine');
// console.log(drinks);

const seasons = ['spring', 'summer', 'fall', 'winter'];
// How do we remove the last season from the seasons array?
// Store the element that is removed in a variable 

const popedValue = seasons.pop();
console.log(popedValue);
console.log(seasons);