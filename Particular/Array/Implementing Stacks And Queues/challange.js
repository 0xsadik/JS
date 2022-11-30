//  push, pop, unshift, and shift

const foods = [
    { food: 'rashberries', type: 'fruit'},
    { food: 'orange', type: 'fruit'},
    { food: 'broccoli', type: 'vegetable'},
    { food: 'quinoa', type: 'grain'}
];

const blackBeans = { food: 'black beans', type: 'legume'};
const chiaSeeds = { food: 'chia seeds', type: 'seed'};


// Challange Question #1
// Remove the last item in the food array.

let rmFood = foods.pop();
// console.log(rmFood);
// console.log(foods);

// Challange Question #2
// Remove the first item in the foods array

let rmFirstItem = foods.shift();
// console.log(rmFirstItem);
// console.log(foods);


// Challange Question #3
// Add the variable blackBeans to the beginning of the foods array
let addBeans = foods.unshift(blackBeans);
console.log(foods);

// Challange Question #4
// Add the variable chiaSeeds to the end of the array.
let addChia = foods.push(chiaSeeds);
// What does your final array look like?
console.log(foods);


