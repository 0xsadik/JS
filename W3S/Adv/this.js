/**
 *      The javascript this keyword 
 * 
 * 
 * What is this?
 * 
 * in javaScript, the this keyword refers to an object 
 * which object depends on how this is begin invoked (used or called)
 * the this keyword refers to different objects depending on how it is used:
 * 
 * 
 * 
 *  - in an object method, this refers to the object
 *  - alone, this refers to the global object 
 *  - in a function, this refers to the global object
 *  - in an event, this refers to the element that receive the event
 *  - Methods like call(), apply(), and bind() can refer this to any object
 * 
 * 
 *  Note: 
 *      this is not a variable. it is a keyword. you cannot change the value of this
 */


//      this in a method 

// const person = {
//     firstName: "Shakil",
//     secondName: "Fahim",
//     id        : 1232,
//     bothName  : function() {
//         return this.firstName + " " + this.secondName;
//     }
// }
// console.log(person.bothName());



//      in a browser window the global object is [object window]

// let x = this;
// console.log(x);



//      in strict mode when used alone, this also refers to the global object 

// "use strict";
// let x = this;


//      this in a fucntion (default)

// function myFunc() {
//     return this
// }



//      this in a function (Strict)

// "use strict";
// function myFunction() {
//   return this;
// }



//      call()

// const person1 = {
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person2 ={
//     firstName: 'Torikus',
//     lastName: 'sadik',
// }

// console.log(person1.fullName.call(person2));



