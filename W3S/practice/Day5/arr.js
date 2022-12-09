
// const arr = Array();
// console.log(arr);


// const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
// console.log(numbers);



// -- array can have items of different data types --

// const arr  = [
//     'something here',
//     250,
//     true,
//     { country: 'Bangladesh', city: 'Dhaka' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python']}
// ];
// console.log(arr);



//  -- create an array using split -- 

// let js = 'JavaScript';
// const charInJS = js.split('');
// console.log(charInJS);


// let companiesStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// const companiesArr = companiesStr.split('');
// console.log(companiesArr);


// let text = 'Amaro porano jaha cay tumi tai tumi tai go amaro porano jaha cay.';
// const word = text.split(' ');
// console.log(word);



//  -- Accessing array items using index -- 

// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// let firstOne = fruits[0];
// console.log(firstOne);
// let lastOne = fruits[3];
// console.log(lastOne);


//  another way to find last index 

// const fruits = ['banana', 'orange', 'mango', 'lemon', 'cherry'];
// let lastIndex = fruits.length - 1;
// let lastOne = fruits[lastIndex];
// console.log(lastOne);


// const webTechs = [
//     'HTML',
//     'CSS',
//     'JAVA SCRIPT',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ];

// console.log(`Total Technology: ${webTechs.length}`);



// -- creating static values with fill -- 

// const arr = Array();
// console.log(arr);

// const eightValues = Array(8).fill('A');
// console.log(eightValues);


// -- concatenating array -- 

// const firstList = [1, 2, 3];
// const secondList = [4, 5, 6];
// const thirdList = firstList.concat(secondList);
// console.log(thirdList);


// -- getting index an element in arr array -- 

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.indexOf(5));
// console.log(numbers.indexOf(4));
// console.log(numbers.indexOf(3));
// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf(1));



// -- check an element if it exist in an array -- 

// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// let index = fruits.indexOf('banana');

// if (index === -1) {
//     console.log('This fruit does not exists in this array.');
// }
// else {
//     console.log('This fruit does exist in the array');
// }


// -- checking array -- 

// const numbers = [1, 2, 3, 4, 5];
// console.log(Array.isArray(numbers));

// const number = 100;
// console.log(Array.isArray(number));


// -- converting arr to str --

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.toString());


// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString());


// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join());

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// console.log(names.join());
// console.log(names.join(' '));
// console.log(names.join(' -> '));


// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice());
// console.log(numbers.slice(0));
// console.log(numbers.slice(0, numbers.length));
// console.log(numbers.slice(0, numbers.length));
// console.log(numbers.slice(1, 4));


// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(0, 1);
// console.log(numbers);


// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse()
// console.log(numbers);


// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ];

// webTechs.sort();
// console.log(webTechs);


