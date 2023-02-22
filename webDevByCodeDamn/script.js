

const h1 = document.querySelector('h1');
h1.innerText = "This is from java script";

const incButton = document.querySelector('.increment');
const decButton = document.querySelector('.decrement');
let counter =0;
const counterEl = document.getElementById('counter');
function incrementCount(){
    counter++;
    counterEl.innerText = counter;
}
function decrementCount(){
    counter--;
    counterEl.innerText = counter;
}

incButton.addEventListener('click', incrementCount)
decButton.addEventListener('click', decrementCount)