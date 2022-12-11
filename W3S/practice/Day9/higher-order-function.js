

// -- higher order function easy way -- 

// function hello() {
//     console.log(`Hello World!`);
// }
// hello();

// hello.language = 'javascript';
// console.log(hello.language);




// var a = function hello() {
//     console.log(`Hello World!`);
// }

// var str = 'hello';


// function hello() {
//     return function () {
//         console.log(`hello world!`);
//     };
// }
// hello()();


// -> example 1  without higher order function <- 

// var numbers = [1, 2, 3];
// var result = [];

// for (let i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2);
// }
// console.log(result);


// -> example 1 with higher order function <-

// var numbers = [1, 2, 3];
// var result = numbers.map(function(number) {
//     return number * 2;
// });
// console.log(result);



// -> example 2 without higher order function <-

var players = [
    {
        name: 'Shakib',
        avg: 38.23
    },
    {
        name: 'Tamim',
        avg: 36.74
    },
    {
        name: 'Mushfiq',
        avg: 36.78
    },
    {
        name: 'Mahmudullah',
        avg: 37.12
    }
];

// var playersWtihAvgThirtySeven = [];
// for (let i = 0; i < players.length; i++) {
//     if (players[i].avg >= 37) {
//         playersWtihAvgThirtySeven.push(players[i]);
//     }
// }
// console.log(playersWtihAvgThirtySeven);



// -> with higher order function <-

// var playersWtihAvgThirtySeven = players.filter((player) => {
//     return player.avg >= 37;
// });
// console.log(playersWtihAvgThirtySeven);



// -> example 3 array.map() built in by me

const languages = ['javaScript', 'Python', 'PHP', 'C'];

function chakni(arr, fn) {
    const newArray =[];
    
    for ( let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    }

    return newArray;

}

const myArray = chakni(languages, function(language) {
    return language.length;
});
console.log(myArray);













// -- callback -- 

// const callback = (n) => {
//     return n ** 2;
// }
// function cube(callback, n) {
//     return callback(n) * n;
// }
// console.log(cube(callback, 3));


// -- Returning function -- 

// higher order function returning an other function 

// const higherOrder = n => {
//     const doSomething = m => {
//         const doWhatEver = t => {
//             return 2 * n + 3 * m + t;
//         }
//         return doWhatEver;
//     }
//     return doSomething;
// }
// console.log(higherOrder(2)(3)(10));

