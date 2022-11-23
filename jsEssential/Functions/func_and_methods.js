

//      function declaration:

function addSomething(a, b) {
    return a + b;
}

//      function expression:

const doSub = function(a, b) {
    return a * b;
}


console.log('Add something: ', addSomething(5, 4));
console.log('sub something: ', doSub(9, 12));


//      immediately invoked function expression 

(function() {
    let a = 10;
    let b = 12;
    let c = addSomething(a, b);
    console.log(`sum of a and b is: ${c}`);
})();