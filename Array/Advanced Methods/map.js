/**
 * map()
 * 
 * Creates a new array based on the function applied to each element in the array your're iterating over 
 * 
 * map(): syntax
 * 
 * let new = array.map(function (currentValue, index, array), thisArg)
 * 
 * callback Function
 * function(currentValue, index, array)
 * 
 */


// const grades = [88, 75, 92, 95, 85];
// let bonusGrades = grades.map((grade) => {
//     return grade + 5
// })
// console.log(bonusGrades);


const friends = [
    { firstname: 'jane', lastname: 'Doe'},
    { firstname: 'john', lastname: 'smith'},
    { firstname: 'Alex', lastname: 'Trebek'}
];

// Create a new array that includes only the full name (first + lastname) of each friend 
// Ecample: 'jane Doe'

// const fullName = friends.map((friend) => {
//     return friend.firstname + ' ' + friend.lastname;
// });
// console.log(fullName);


const fullName = friends.map(
    (friend) => `${friend.firstname} ${friend.lastname}`
);
console.log(fullName);