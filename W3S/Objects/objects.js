    /*           ===== javaScript objects =====

                    - objects are variables too. But, objects can contain many values;
                    
                    > it's a common practice to declare objects with te 'const' keyword


*/

// const car = {type: "Fait", model: "500", color: "white"};

// the values are written as name:value pairs ( name and value separated by a colon);


// spaces and line breaks are not important. An object definition can span multiple lines:

// const person = {
//     firstName : "shakil",       // here, 'firstName' is property and "shakil" is property value
//     lastName : "babu",
//     age : 22,
//     eyecolor : "blue"
// };
// we can access object properties in two ways:
// objectName.propertyName or objectName["propertyName"];

// console.log(person.lastName);
// console.log(person["lastName"]);


/*          ===== object methods =====
                    - objects can also have methods 
                    - methods are actions that can be performed on objects.
                    - methodsa are stored in properties as function definitions;

                    > a method is a function stored as a property
*/

// const person = {
//     firstName : "fahim",
//     lastName : "morshed",
//     id : 1245,
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName());



// ====== Do not declare strings, numbers, and booleans as objects
// when a javaScript variable is declared with the keyword "new", the variable is created as an obejct:


// a = new String();       // declares a as a string object 
// b = new Number();       // declares b as a number object
// c = new Boolean();      // declares c as a boolean object






