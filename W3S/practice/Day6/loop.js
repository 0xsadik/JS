
// -- for loop -- 

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }


// reverse 

// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }


// for (let i = 0; i <= 5; i++) {
//     console.log(`${i} * ${i} = ${i * i}`);
// }


// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
// const newArr = [];
// for (let i = 0; i < countries.length; i++) {
//     newArr.push(countries[i].toUpperCase());
// }
// console.log(newArr);


// -- adding all elements in the array

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }
// console.log(sum);



// creating a new array based on the existing array

// const numbers = [1, 2, 3, 4, 5];
// const newArr = [];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++){
//     newArr.push(numbers[i] ** 2);
// }
// console.log(newArr);


// == while loop == 

// let i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }


// == do while == 

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);



// == for of == 

// const numbers = [1, 2, 3, 4, 5]
// for (const num of numbers) {
//     console.log(num);
// }


// const numbers = [1, 2, 3, 4, 5]
// for (const num of numbers) {
//     console.log(num * num);
// }


// adding all the numbers in the array 
// const numbers = [1, 2, 3, 4, 5]
// let sum = 0;
// for (const num of numbers) {
//     sum = sum + num;
// }
// console.log(sum);


// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ];
// for (let tech of webTechs) {
//     console.log(tech.toUpperCase());
// }


// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ];

// for (let tech of webTechs) {
//     console.log(tech[0]);
// }


// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
// const newArr = [];
// for (const country of countries) {
//     newArr.push(country.toUpperCase());
// }
// console.log(newArr);


// == break == 

// for (let i = 0; i <= 5; i++) {
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
// }


// == continue == 

// for (let i = 0; i <= 5; i++) {
//     if(i == 3) {
//         continue;
//     }
//     console.log(i);
// }