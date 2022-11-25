//      Default parameter values


function tori(x , y = 10) {
    // y is 10 if not passed or undefined

    return x + y;
}
// console.log(tori(5, 12));
console.log(tori(5));