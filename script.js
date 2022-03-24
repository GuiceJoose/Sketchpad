const pad = document.querySelector('.pad');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makePad(numberOfBoxes){
    removeAllChildNodes(pad);
    document.documentElement.style.setProperty("--boxNumber", numberOfBoxes);
    for (let i=0; i<(numberOfBoxes**2); i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('square');
        pad.appendChild(newDiv)
    }
}


pad.addEventListener('mouseover', function (event) {
event.target.classList.add('hovered')
})


let userInput = document.querySelector('.slider');
let boxNumber = userInput.value;

userInput.addEventListener('input', () => {
    let boxNumber = userInput.value;
    makePad(boxNumber);
})
makePad(boxNumber);

let button = document.querySelector('.button');


button.addEventListener('click', ()=> {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
    square.classList.remove('hovered');
    
})});