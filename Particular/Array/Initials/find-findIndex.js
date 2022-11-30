/**
 * find() and findIndex()
 * 
 * Returns the first element or index that passes the testing function 
 * Need more than one element? : 
 * use filter(), NOT find() or findIndex()
 * 
 */


/**
 * find() and findIndex()
 * 
 * First matching value returned
 * Both array methods use the same syntax
 */


/**
 * find()
 * 
 * Returns the first element that passes the testing function.
 * No match? Returns undefined 
 */

/**
 * findIndex()
 * 
 * Returns the first index that passes the testing function 
 * not match? return -1
 */

/**
 * callback function
 * 
 * function(element, index, array)
 */


/**
 * find() and findIndex(): syntax
 * 
 * array.find(function(element, index, array), thisArg)
 * array.findIndex(function(element, index, array), thisArg)
 * 
 */


const grades = [99, 83, 87, 91, 77];

// Find the first grade that is less than 80
const underEighty = grades.find((element) => element < 80);
// console.log(underEighty);

// Find the inex of the first grade that is over 80

const overEighty = grades.findIndex((element) => element > 80);
console.log(overEighty);