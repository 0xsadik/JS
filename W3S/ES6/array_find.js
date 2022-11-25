//      Array find()

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(tori);
console.log(first);

function tori(value) {
    return value > 18;
}

/*

Note that the function takes 3 arguments:

        The item value
        The item index
        The array itself

*/