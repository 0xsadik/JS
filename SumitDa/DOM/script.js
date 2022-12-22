// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.head);
// console.log(typeof(document.head));
// console.dir(document.head);
// console.log(document.body);

// document.title = 'play with dom';

// for (let element of document.all) {
//     console.log(element);
// }


// console.log(document.getElementById('new-task'));


// let headElement = document.getElementById('header');
// headElement.textContent = 'To Do apps';
// headElement.innerText = 'To do apps';



// let headElement = document.getElementById('header');
// headElement.style.borderBottom = 'red';



// let items = document.getElementsByClassName('item');
// for(let i = 0; i < items.length; i++) {
//     items[i].style.color = 'red';
// }


// let itemUl = document.getElementById('items')
// let items = itemUl.getElementsByClassName('item');
// for(let i = 0; i < items.length; i++) {
//     items[i].style.color = 'red';
// }



// get element tagname



// let items = document.getElementsByTagName('li');
// console.log(items);



// Query selector 


// let head = document.querySelector('.header');
// console.log(header);


// let head = document.querySelector('#new-tesk');
// console.log(header);


// let lastItem = document.querySelector('.item:last-child');
// lastItem.style.color = 'red';







// const parent = document.querySelector('#items');
// const children = parent.children;

// console.log(children);


// const grandparent = document.querySelector('.todo-list');
// const parent = grandparent.children;
// const children = parent[1].children;
// console.log(children);



// const grandparent = document.querySelector('.todo-list');
// // const parent = grandparent.children;
// const children = grandparent.querySelector('.item');
// console.log(children);



// const children = document.querySelector('.item');
// const parent = children.parentElement;
// console.log(parent);


// const children = document.querySelector('.item');

// const grandparent = children.closest('.todo-list');
// console.log(grandparent);


// const childrenOne = document.querySelector('.item');
// const childrenTwo = childrenOne.nextElementSibling;
// // console.log(childrenTwo);
// childrenTwo.style.color = 'red';


// const childrenTwo = document.querySelector('.item').nextElementSibling;
// const childrenOne = childrenTwo.previousElementSibling;
// childrenOne.style.color = 'green';




// -> manipulate the DOM 

// creating an element 

// const divElement = document.createElement('div');
// divElement.className = 'red';
// divElement.setAttribute('id', 'red');
// divElement.setAttribute('tittle', 'Red Div');


// const container = document.querySelector('.todo-list');
// const h2Element = container.querySelector('h2');
// container.insertBefore(divElement, h2Element);

// const container = document.querySelector('.todo-list');
// container.appendChild(divElement);
// container.appendChild(divElement);





// -> event listeners

const headerElement = document.querySelector('#header');
// headerElement.addEventListener('click', (event) => {
//     console.log(event);
// });

// double click

// headerElement.addEventListener('dblclick', (event) => {
//     console.log(event);
// });

// mouse down

// headerElement.addEventListener('mousedown', (event) => {
//     console.log(event);
// });

// mouse up

// headerElement.addEventListener('mouseup', (event) => {
//     console.log(event);
// });

//  mouse enter

// headerElement.addEventListener('mouseenter', (event) => {
//     console.log(event);
// });


// mouse leave 
// headerElement.addEventListener('mouseleave', (event) => {
//     console.log(event);
// });

// mouse over 

headerElement.addEventListener('mouseover', (event) => {
    console.log(event);
});


