
// function add(x, y) {
//     console.log(x + y);
// }
// add(); // NaN

function add(x = 5, y = 7) {
    console.log(x + y);
};
// add();
// add(120, 240);


function haveFun(activityName, time) {
    console.log(`Today I will go ${activityName} for ${time} hours.`);
};
haveFun('biking', 2.5);
