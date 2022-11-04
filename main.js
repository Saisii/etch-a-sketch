const gridContainer = document.querySelector("#grid");

function makeBox () {
    const gridContent = document.createElement('div');
    gridContent.classList.add('grid_box');

    gridContainer.appendChild(gridContent);
}

for (i = 0; i <= 128; i++) {
    makeBox();
}

