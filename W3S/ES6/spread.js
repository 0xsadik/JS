//      javascript Spread operator


const group1 = ["Torikus", "shakil", ..."fahim"];
const group2 = ["A. halim", "arafat","Afifa"];

const combined = [group1, ...group2];
console.log(combined);



const numbers = [23, 55, 21, 87, 56];
let maxValue = Math.max(...numbers);
console.log(maxValue);