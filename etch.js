

// for (i = 0; i < 16; i++) {
//     for(j = 0; j < 16; j++){
//         const board = document.querySelector('.board');
//         const row = document.createElement('div');

//         row.classList.add('row');
//         board.appendChild(row);
//     }
// }

function createRow() {
    for(i = 0; i < 16; i++){
        const board = document.querySelector('.board');
        const row = document.createElement('div');
        row.classList.add('row');
        board.appendChild(row);
        for(j = 0; j < 16; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
} 


createRow();
