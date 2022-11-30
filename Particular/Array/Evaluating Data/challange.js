// includes, some, and every

const bowlingScores = [154, 204, 300, 184, 286];

// Challange Question #1
// Does the array of bowling scores include a 300?
const includes300 = bowlingScores.includes(300);
// console.log(includes300);

// Challange Question #2
// Are some of the scores under 150?
const under150 = bowlingScores.some((score) => score < 150);
// console.log(under150);


// Challange Question #3
// Is every score an even number?
const isEven = bowlingScores.every((score) => score % 2 === 0);
console.log(isEven);