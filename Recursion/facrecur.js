
// factorial 20
// samall probelm === base case
// factorial 0 is 1

function factorial(index) {
    if ( index === 0) {
        return 1;
    }
    return index * factorial(index - 1);
}
console.log(factorial(5));