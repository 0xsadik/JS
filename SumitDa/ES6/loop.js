// for loop, for in, for of 

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }


// const myObj = {
//     name: 'javaScript',
//     estd: '1995',
//     founder: 'Brendan Eich'
// };

// for (property in myObj) {
//     console.log(property);
// }


// const myArr = [1, 2, 3, 4, 5];
// for (element in myArr) {
//     console.log(element); // will print index
// }



// const myArr = [1, 2, 3, 4, 5];
// for (element in myArr) {
//     console.log(element); // will print elements
// }


// const arr = 'I love javaScript';
// for (letters in arr) {
//     console.log(letters); // will print all index
// }

const arr = 'I love javaScript';
for (letters of arr) {
    console.log(letters); // will print all character
}