
function* director() {
    yield "three";
    yield 'two';
    yield 'one';
    yield 'Action';
}

let countdown = director();
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next());
