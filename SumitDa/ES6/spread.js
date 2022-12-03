// spread operator 

// var numbers = [1, 2, 3];

// // var numbers = [numbers[0], numbers[1], numbers[2], 4, 5, 6];
// var newNumbers = [...numbers, 4, 5, 6];
// console.log(newNumbers);



// var numbers = [1, 2, 3];

// // var a = [...numbers];   // exact copy of numbers
// var a = numbers;
// numbers.push(4);
// console.log(a);
// console.log(numbers);



// var numbers1 = [1, 2, 3];
// var numbers2 = [4, 5, 6];

// var numbers = [...numbers1, ...numbers2];
// console.log(numbers);




// object spreading 


var myobj1 = {
    x: 1,
    y: 2
};

var myobj2 = {
    a: 1,
    b: 2
}

console.log({...myobj1, ...myobj2});