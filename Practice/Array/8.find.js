// Arrow function
// find((element) => { /* … */ })
// find((element, index) => { /* … */ })
// find((element, index, array) => { /* … */ })


// const arr = [5, 12, 8, 130, 44];
// const found = arr.find((element) => element > 43);
// console.log(found);


// point to note

// const arr = [5, 12, 8, 130, 44];
// const sorted = arr.sort((a, b) => a - b);
// const found = sorted.find((element) => element > 43);
// console.log(found);



// Find and object in an array by one of it's properties 

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

const found = inventory.find(isCherries);
console.log(found);