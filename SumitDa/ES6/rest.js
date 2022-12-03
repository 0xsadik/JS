
// rest operation 

// function myFunc (a, b) {
//     console.log(arguments);
//     // console.log(a, b);
// }
// myFunc(5, 6, 7, 8, 9);



// function tori(...params) {
//     console.log(params);
// }
// tori(5, 4, 5, 3, 4);



function tori(a, ...params) {
    console.log(a);
    console.log(params);
}
tori(5, 4, 5, 3, 4);