// ES6 fat arrow function 


// function number() {
//     return 10;
// }


// arrow

// let number = () => {
//     return 10; 
// }


// let number = () => 10;


// function number(n) {
//     return n;
// }


// let number = (n) => {
//     return n;
// }


// let number = (n) => 15;

// let number = n => 15;

// let number = (a, b) => a + b;

// console.log(number(12, 56));


// var javascript = {
//     name: 'javaScript',
//     libraries: ['React', 'Angular', 'Vue'],
//     printLibraries: function() {
//         let self = this;
//         this.libraries.forEach(function(a) {
//             console.log(`${self.name} loves ${a}`)
//         });
//     }
// };

// javascript.printLibraries();



var javascript = {
    name: 'javaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function() {
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    }
};

javascript.printLibraries();