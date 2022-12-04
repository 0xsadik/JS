const arr = [2, 3, 4, 5, 6, 9];
// let index = 2;
let index = -2;
console.log(`using an index of ${index} the item returned is ${arr.at(index)}`);

// Return the last value of an array

const cartt = ['apple', 'banana', 'pear'];
console.log(cartt.at(-1));


// --> return last element of an array

// const cart = ['apple', 'banana', 'pear'];
// function returnLast(arr) {
//     return arr.at(-1);
// }

// const lastItem = returnLast(cart);
// console.log(lastItem);


// --> return first element of an array

const cart = ['apple', 'banana', 'pear'];
function firstItem (arr) {
    return arr.at(0);
}

const first = firstItem(cart);
console.log(first);


// --> calling at() on non-array objects

const arrayLike = {
    length: 2,
    0: 'a',
    1: 'b'
};
console.log(Array.prototype.at.call(arrayLike));


