
const searchInput = document.querySelector('.search');
const display = document.querySelector('.result');
const thanks = document.querySelector('.thanks');

//  normal function 

// function show() {
//     display.innerHTML = this.value;
//     let self = this;
//     setTimeout(function () {
//         thanks.innerHTML = `You have typed: ${self.value}`;
//     }, 1000);
// }


// const show = () => {
//     display.innerHTML = this.value;
// };

searchInput.addEventListener('keyup', () => {
    console.log(this);
    display.innerHTML = this.value;
});