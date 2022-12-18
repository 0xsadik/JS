// function largestElement(numbers) {
//     let largest = 0;
//     for( let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }
// const ages = [12, 54, 2, 34, 75, 76, 32, 12];
// console.log(largestElement(ages));



function findLarge(arr) {
    let borota = 0;
    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] > borota) {
             borota = arr[i];
        }
    }
    return borota;
}
let nums = [1, 2, 3, 4];
console.log(findLarge(nums));