const pad = document.querySelector('.pad');

function makePad(){
    for (let i=0; i<256; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('square');
        pad.appendChild(newDiv)
    }
}

makePad();

//let squares = document.querySelectorAll('square');
pad.addEventListener('mouseover', function (event) {
event.target.classList.add('hovered')
})