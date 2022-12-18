// const numbers = [44, 23, 34, 32, 54, 5, 78];
// sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }
// console.log(sum);



// function arrTotal (arr) {
//     sum = 0; 
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(arrTotal([1, 2, 3, 4, 5]));


function arrTotal (numbers) {
    let sum = 0;
    for ( let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrTotal([1, 2, 3, 4, 5]); 
console.log(total);