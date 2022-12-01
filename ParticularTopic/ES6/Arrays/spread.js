
let cats = ['biscuit', 'jungle', 'gentle'];
let dogs = ['stella', 'camper', 'twist'];

// let animals = ['smoky', 'miro', 'swimmy', cats, dogs];
let animals = ['smoky', 'miro', 'swimmy', ...cats, ...dogs];
console.log(animals);