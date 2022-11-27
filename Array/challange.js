// sort, reverse, find, findindex

const students = [
    { name: 'john', grade: 75 },
    { name: 'jane', grade: 93 },
    { name: 'samantha', grade: 90 },
    { name: 'michael', grade: 94},
];

// challenge question #1
// sort the array of students based on their grade,
// in descending order(largest to smallest)

// students.sort((a, b) => b.grade - a.grade);
// console.log(students);



// challange question #2
// After sorting the array, reverse the order of the array.
// console.log('reversed array:', students.reverse())

// challange question #3
// Find a student in the array who has a grade over 90

const overNinety = students.findIndex((element) => element.grade > 90);
console.log(overNinety);

