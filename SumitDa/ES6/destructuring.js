// destructuring 

// --> object destructuring 


// const user = {
//     id: 339,
//     name: 'shakib',
//     age: 35
// };

// object theke name take ber kore ene arekta variable e assign korte cai
// jeno onno jaygay use korte pari.

// var name = user['name'];
// console.log(name);


// soman kore nei (uvoi pase object thakte hobe)
// const {name} = user;
// console.log(name);


// const {name: title} = user;
// console.log(title);


// -> nested object 

 


// const user = {
//     id: 339,
//     name: 'shakib',
//     age: 35,
//     education: {
//         degree: 'masters',
//     }
// };

// // const {education: {degree}} = user;
// const { education: { degree } = {} } = user;
// console.log(degree);


// ---> Array destructuring 


// // var numbers = [1, 2, 3, 4, 6];
// var numbers = [1, 2, [3, 100, 500], 4, 6];

// // var [a, b] = numbers;
// // var [, a, , , b] = numbers;

// var [, ,[, a, b]] = numbers;
// console.log(a, b);



// ---> swap stuff

// var a = 1;
// var b = 2;

// // the old way 

// var temp = a;
// a = b;
// b = temp; 
// console.log(a, b);


// the new way

var a = 10;
var b = 20;

[a, b] = [b, a];
console.log(a, b);