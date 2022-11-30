// forEach for ease and readablity


// for loop example 

// const fruits = ['apple', 'banana', 'orange', 'pineapple'];
// let frtl = fruits.length;
// for (var i = 0; i < frtl; i++) {
//     console.log(fruits[i]);
// }


// forEach 

// const fruits = ['apple', 'banana', 'orange', 'pineapple'];
// fruits.forEach((element) => {
//     console.log(element);
// })




const scores = [50, 60, 70, 80, 90, 100];
const logScore = (score) => console.log('Score over 65:', score);
scores.forEach((element) => {
    if (element > 65) {
        logScore(element);
    }
})