//  Iterating with the for/of loop


// for (let letter of 'javascript') {
//     console.log(letter);
// }


// let topics = ['javascript', 'node', 'css'];

// for (let topic of topics) {
//     console.log(topic);
// }


let topics = new Map();
topics.set('HTML', '/topic/html');
topics.set('CSS', 'topic/css');
topics.set('javasScript', 'topic/javaScript');

// for (let topic of topics) {
//     console.log(topic);
// }

// for (let topic of topics.keys()) {
//     console.log(topic);
// }


// for(let route of topics.values()) {
//     console.log(`The course description can be found at ${route}`);
// }

for (let topic of topics.entries()) {
    console.log(topic);
}