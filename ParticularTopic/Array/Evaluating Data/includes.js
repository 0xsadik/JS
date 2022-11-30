/**
 * includes(): syntax
 * 
 * array.includes(value, fromIndex)
 * note: value is case sensitive
 * 
 * 
 */


const careers = ['teacher', 'doctor', 'engineer','nurse', 'scientist'];
// does the career array include a nurse ?

const nurseIncluded = careers.includes('nurse');
console.log(nurseIncluded);