var numbers = [1, 2, 3, 4, 5, 6];

var result = numbers.reduce((prevValue, currentValue, currentIndex, arr) => {
    return prevValue + currentValue;
}, 0);

console.log(result);