const gridContainer = document.querySelector("#grid");

function makeBox () {
    const gridContent = document.createElement('div');
    gridContent.classList.add('grid_box');

    gridContainer.appendChild(gridContent);
}

//create div containers for the rows
function createNewDiv (numberOfDivs) {
    for (i=0; i < numberOfDivs; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'row' + i);

        gridContainer.appendChild(newDiv);
    }
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

//create row of blocks
function makeRow (number) {
    for (i=0; i < number; i++) {
        const newDiv = document.createElement('div');
        let divSelector = document.querySelector('#row' + i);
        newDiv.setAttribute('id', 'row' + i);
        newDiv.classList.add('divFlex');

        gridContainer.appendChild(newDiv);

        console.log('created main div' + i);
        
        for (j = 0; j < number; j++) {        
            let gridContent = document.createElement('div');
            gridContent.classList.add('grid_box');

            newDiv.appendChild(gridContent);
            colorBoxesOnHover();

            console.log('created secondary div' + i);
        }
    }
}


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
    makeRow(numOfBlocks);
    })
}





buttonAction();