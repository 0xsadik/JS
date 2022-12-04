// ludo khelay amara kivabe 1 theke 6 songkha randomly print korte pari

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min; 
// }
// console.log(getRandomNumber(1, 6));


// kivabe amra amader srenikokkher sokoler nam 'Alphabetically' sajate pari?

// const students = ['rakib', 'shakib', 'sumi', 'atikur',  'bablu', 'comok'];
// students.sort();
// console.log(students);


// kivabe amra amader srenikokkher sokoler roll number krom onujayi sajate pari?
// const roll_numbers = [3, 2, 5, 7, 4, 9];
// // console.log(roll_numbers.sort());
// console.log(roll_numbers.sort(function(a,b) {
//     return a - b;
// }));


// kono sal leap year kina ta ber korte pari ki vabe ?

// function isLeapYear(year) {
//     if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
//         console.log(`${year} is a leap year!`);
//     }
//     else {
//         console.log(`${year} is not a leap year.`)
//     }
// }
// isLeapYear(2024);


// kono sentence e kotogulo vowel ace ta nirnoy kora jay kivabe?

// const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

// function countVowels(sentence) {
//     let count = 0;
//     const letters = Array.from(sentence);

//     letters.forEach(function(value, index, array) {
//         if (vowels.includes(value)) {
//             count++;
//         }
//     })
    
//     return count;
// }

// console.log(countVowels('I love bangladesh'));



// kono array theke duplicate number guloke kivabe ber kore ante pari?

// const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];
// const duplicates = numbers.filter(function(value, index, array) {
//     return array.indexOf(value) !== index;
// });
// console.log(duplicates);

// kono array theke unique number guloke kivabe ber kore ante pari?


const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];
const unique = numbers.filter(function(value, index, array) {
    return array.indexOf(value) === index;
});
console.log(unique);