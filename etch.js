let n = prompt('Enter a grid size: \nWill be grid x grid');
if (n < 2 || n > 50){
    console.log('grid needs to be at least 2 but 50 or less');
    n = prompt('Enter a valid number:');
}
function createGrid(n) { 
    for(i = 0; i < n; i++){
        const board = document.querySelector('.board');
        const row = document.createElement('div');
        row.classList.add('row');
        board.appendChild(row);
        for(j = 0; j < n; j++){
            const cell = document.createElement('div');
            
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
    
} 

createGrid(16);

function clearGrid() {
    const row = document.querySelectorAll('.row')
    row.forEach(row => {
        row.remove();
    });
    createGrid(n);

    const cell = document.querySelectorAll('.cell');
    cell.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        cell.setAttribute('style', 'background-color: black;');
    });
});
}

//Event Listeners
const cell = document.querySelectorAll('.cell');
cell.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        cell.setAttribute('style', 'background-color: black;');
    });
});


const reset = document.querySelector('.reset');
reset.addEventListener('click', function() {
    clearGrid();
});

const newGrid = document.querySelector('.size');
newGrid.addEventListener('click', function() {
    // clearGrid();
    n = prompt('Choose a new size');
    if (n < 2 || n > 50){
        console.log('grid needs to be at least 2 but 50 or less');
        n = prompt('Enter a valid number:');
    }
    clearGrid();
})

// function newSize(size){
//     clearGrid();
    // const cell = document.querySelectorAll('.cell');
    // cell.forEach(cell => {
    // cell.addEventListener('mouseover', function() {
    //     cell.setAttribute('style', 'background-color: black;');
    // });
    // })
// }
