// // Arrow function
// every((element) => { /* … */ })
// every((element, index) => { /* … */ })
// every((element, index, array) => { /* … */ })

// // Callback function
// every(callbackFn)
// every(callbackFn, thisArg)

// // Inline callback function
// every(function (element) { /* … */ })
// every(function (element, index) { /* … */ })
// every(function (element, index, array) { /* … */ })
// every(function (element, index, array) { /* … */ }, thisArg)



// const isBelowThreshold = (currentValue) => currentValue < 40;

// const arr = [1, 30, 39, 29, 10, 13];
// console.log(arr.every(isBelowThreshold));



// function isBigEnough(element, index, array) {
//     return element >= 10;
// }

// // console.log([12, 5, 8, 130, 44].every(isBigEnough));
// console.log([12, 54, 18, 130, 44].every(isBigEnough));


// --> check if one array is a subset of another array

// const isSubset = (arr1, arr2) => arr2.every((element) => arr1.includes(element));
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 6]));



//     using every() on sparse arrays 

// console.log([1, , 3].every((x) => x !== undefined)); 
// console.log([2, , 2].every((x) => x === 2));



// ---- modifying items ----

let arr = [1, 2, 3, 4];
arr.every((element, index, arr) => {
    arr[index + 1]--;
    console.log(`[${arr}][${index} -> ${element}]`);
    return element < 2;
});

