// "use strict";

// x = 3.14;       // will throw an error


// tori();

// function tori() {
//     y = 3.14;
// }



// a = 3.14;
// myFunc();

// function myFunc() {
//     "use strict";
//     b = 3.14;       // b is not defined
// }




//      objects are variable too

// "use strict";
// a = {abir:98, shakil: 97}; 



//      deleting a variable ( or object ) is not allowed

// "use strict";
// let x = 3.14;
// delete x;



//      deleting a function is not allowed

// "use strict";
// function a(x, y) {};
// delete a;



//      duplicating a parameter name is not allowed

// "use strict";
// function d(a, a) {};


//      octal numeric literals are not allowed

// "use strict";
// let a = 010;



//      octal escape characters are not allowed

// "use strict";
// let a = '\010';




//      writing  to a read-only property is not allowed

// "use strict";
// const obj = {};
// Object.defineProperty(obj, 'x', {value:0, writable: false});
// obj.x = 3.14;





//      writing to a get-only property is not allowd

// "use strict";
// const obj = {get x() {return 0} };
// obj.x = 3.14; 



//      deleting an undeletable property is not allowed

// "use strict";
// delete Object.prototype;


//      The word 'eval' cannot be used as a variable 

// "use strict";
// let eval = 3.14;



// -> and so on...

