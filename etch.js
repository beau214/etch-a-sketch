// for (i = 0; i < 16; i++) {
//     for(j = 0; j < 16; j++){
//         const board = document.querySelector('.board');
//         const row = document.createElement('div');

//         row.classList.add('row');
//         board.appendChild(row);
//     }
// }

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

function setGrid(){
    let size = document.querySelector('.grid').value;
    createGrid(size);
}

createGrid(16);

function clearGrid() {
    const cell = document.querySelectorAll('.cell')
    cell.forEach(cell => {
        cell.setAttribute('style', 'background-color: white;');
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