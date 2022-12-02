
// let person = {
//     first: 'angie',
//     hobbies : ['bike', 'hike', 'ski'],
//     printHobbies: function() {
//         this.hobbies.forEach(function (hobby) {
//             let string = `${this.first} likes to ${hobby}`;
//             console.log(string);
//         });
//     }
// };

// person.printHobbies();



// let person = {
//     first: 'angie',
//     hobbies : ['bike', 'hike', 'ski'],
//     printHobbies: function() {
//         let _this = this;
//         this.hobbies.forEach(function (hobby) {
//             let string = `${_this.first} likes to ${hobby}`;
//             console.log(string);
//         });
//     }
// };

// person.printHobbies();



let person = {
    first: 'angie',
    hobbies : ['bike', 'hike', 'ski'],
    printHobbies: function() {
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);
        });
    }
};

person.printHobbies();