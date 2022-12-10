// == scope == 



// -- window global object -- 

// a = 'javascript';
// b = 10;

// function letsLearnScope() {
//     console.log(a, b);
//     if (ture) {
//         console.log(a, b);
//     }
// }
// console.log(a, b);


// -- global scope -- 

// let a = 'javascript';
// let b = 10;

// function letsLearnScope() {
//     console.log(a, b);
//     if (true) {
//         let a = 'python';
//         let b = 100;
//         console.log(a, b);
//     }
//     console.log(a, b);
// }
// letsLearnScope();
// console.log(a, b);


// -- local scope -- 
//      - block scope 
//      - function scope 

let a = 'javaScript'; // is a global scope 
let b = 10;  // is a global scope 

// function scope 

function letsLearnScope() {
    console.log(a, b);
    let value = false; 

    if (true) {
        let a = 'python';
        let b = 20;
        let c = 30;
        let d = 40;
        value = !value;

        console.log(a, b, c, value);
    }
    console.log(a, b, value);
}
letsLearnScope();
console.log(a, b);

