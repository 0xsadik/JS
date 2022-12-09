
// 1. ----------------

// for 

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }


// while 

// let i = 0;
// while ( i <= 10) {
//     console.log(i);
//     i++;
// }


// do while 

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);


// 2. --------------------

// for

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }


// while 

// let i = 10;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

// do while 

// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i >= 0);

// 3. ------------------------
// 0 to n

// let n = 12;
// for (let i = 0; i <= n; i++) {
//     console.log(i);
// }


// 4. ------------------------

// console.log('#');
// console.log('##');
// console.log('###');
// console.log('####');
// console.log('#####');
// console.log('######');
// console.log('#######');


// 5. ------------------------------

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100


// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} * ${i} = ${i * i}`);
// }


// 6. ---------------------------

// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000


// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}    ${i ** 2}    ${i ** 3}`);
// }


// 7. -----------------

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// 8. ---------------------

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


for (let i = 0; i <= 100; i++) {
    if (i < 2 && i % 2 === 0 ) {
        break;
    }
}