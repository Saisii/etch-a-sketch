const gridContainer = document.querySelector("#grid");

function makeBox () {
    const gridContent = document.createElement('div');
    gridContent.classList.add('grid_box');

    gridContainer.appendChild(gridContent);
}

//all boxes turn colors on hover
function colorBoxesOnHover () {
    const colorBox = document.querySelectorAll('.grid_box');

    for (let i = 0; i < colorBox.length; i++) {
        colorBox[i].addEventListener('mouseover', () => {
            colorBox[i].style.backgroundColor = 'red';
        })
    }
}

// create a grid of blocks
function makeAllBlocks (number) {
    for (i = 0; i <= number; i++) {
        makeBox();
        colorBoxesOnHover();
}}

// clear all blocks
function clearBlocks () {
    const elements = document.getElementsByClassName('grid_box');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}



//button to reset all blocks and then ask for new grid number
function buttonAction () {
    const reset = document.querySelector('#new_grid_btn');

    reset.addEventListener('click', () => {
    let numOfBlocks = prompt('how many blocks?');

    clearBlocks();
    makeAllBlocks(numOfBlocks);
    })
}



makeAllBlocks (1000);




buttonAction();