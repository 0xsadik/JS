// Array.prototype.find()

// var numbers = [1, 2, 3, 4, 5, 6, 10];
// var result = numbers.find(function(currentValue) {
//     return currentValue > 4;
// });

// console.log(result);



class Student {
    constructor(name, age) {
        this.name = name;
        this.asge = age;
    }
    test() {
        console.log('hello');
    }
    exampleFunction() {
        let array = [1, 2, 3];
        array.find(function() {
            this.test();
        }, this);
    }
}

let student = new Student('sumit', 35);
student.exampleFunction();