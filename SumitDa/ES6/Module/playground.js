// imports / exports 


// import {pi, a} from './external.js' // named export 
// console.log(pi, a);

// import * as test from './external.js'
// console.log(test);


// import {a as varA, pi as varPi } from './external.js';
// console.log(varA, varPi);


// import external, {pi, myFunc} from './external.js'; 
// console.log(external, pi);
// myFunc();


import external, { a, pi } from './external.js';
console.log(a, pi);
external();