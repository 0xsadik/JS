
// const processOrder = (customer) => {
//     console.log(`Processing order for customer 1`);

//     var currentTime = new Date().getTime();
//     while (currentTime + 3000  >= new Date().getTime());

//     console.log(`Order processed for customer 1`);
// };

// console.log(`take order for customer 1`);
// processOrder();
// console.log(`complete order for customar 1`);




// const processOrder = (customer) => {
//     console.log(`Processing order for customer 1`);

//     setTimeout(() => {
//         console.log('Cooking complete!')
//     }, 3000);

//     console.log(`Order processed for customer 1`);
// };

// console.log(`take order for customer 1`);
// processOrder();
// console.log(`complete order for customar 1`);




const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback) => {
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
        console.log(`cooking completed`);
        console.log(`order processed for ${customer}`);
        callback(customer);
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`completed order for ${customer}`);
};

takeOrder('customer1', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    })
});
console.log('hello');

