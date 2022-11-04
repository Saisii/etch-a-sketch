const gridContainer = document.querySelector("#grid");

function makeBox () {
    const gridContent = document.createElement('div');
    gridContent.classList.add('grid_box');

    gridContainer.appendChild(gridContent);
}

// create a grid of blocks
for (i = 0; i <= 1000; i++) {
    makeBox();
}

const colorBox = document.querySelectorAll('.grid_box');

for (let i = 0; i < colorBox.length; i++) {
    colorBox[i].addEventListener('mouseover', () => {
        colorBox[i].style.backgroundColor = 'red';
})
}