const promise1 = Promise.resolve(`promise 1 resloved.`);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved.`);
    }, 2000);
});

// promise1.then(res => console.log(res));
// promise2.then(res => console.log(res));

// Promise.all([promise1, promise2])
//     .then(res => {
//         console.log(res);
//     });



    Promise.race([promise1, promise2])
    .then(res => {
        console.log(res);
    });