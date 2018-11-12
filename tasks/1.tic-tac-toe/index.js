const CROSS = 'X';
const ZERO = 'O';
const EMPTY = ' ';
const RED = '#FF0000';
const container = document.getElementById('fieldWrapper');

let currentSymbol = ZERO;
let stepsCounter = 0;
let gameCompletionStatus = false;

startGame();
addResetListener();

function startGame () {
    renderGrid(3);
}

function renderGrid (dimension) {
    container.innerHTML = '';

    for (let i = 0; i < dimension; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < dimension; j++) {
            const cell = document.createElement('td');
            cell.textContent = EMPTY;
            cell.addEventListener('click', () => cellClickHandler(i, j));
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function cellClickHandler (row, col) {
    if (gameCompletionStatus === true) return;

    if (findCell(row, col).innerHTML === EMPTY) {
        stepsCounter++;
        if (currentSymbol === ZERO) {
            currentSymbol = CROSS;
            renderSymbolInCell(currentSymbol, row, col);
        } else {
            currentSymbol = ZERO;
            renderSymbolInCell(currentSymbol, row, col);
        }
        if (stepsCounter === 9) {
            alert("Победила дружба");
            gameCompletionStatus = true;
        }

        //ZEROS
        for (i = 0; i < 3; i++) {
            if (findCell(i, 0).innerHTML === ZERO && findCell(i, 1).innerHTML === ZERO && findCell(i, 2).innerHTML === ZERO) {
                findCell(i, 0).style.color = RED;
                findCell(i, 1).style.color = RED;
                findCell(i, 2).style.color = RED;
                alert("Победили нолики!");
                gameCompletionStatus = true;
            }
            if (findCell(0, i).innerHTML === ZERO && findCell(1, i).innerHTML === ZERO && findCell(2, i).innerHTML === ZERO) {
                findCell(0, i).style.color = RED;
                findCell(1, i).style.color = RED;
                findCell(2, i).style.color = RED;
                alert("Победили нолики!");
                gameCompletionStatus = true;
            }
        }
        if (findCell(0, 0).innerHTML === ZERO && findCell(1, 1).innerHTML === ZERO && findCell(2, 2).innerHTML === ZERO) {
            findCell(0, 0).style.color = RED;
            findCell(1, 1).style.color = RED;
            findCell(2, 2).style.color = RED;
            alert("Победили нолики!");
            gameCompletionStatus = true;
        }
        if (findCell(2, 0).innerHTML === ZERO && findCell(1, 1).innerHTML === ZERO && findCell(0, 2).innerHTML === ZERO) {
            findCell(2, 0).style.color = RED;
            findCell(1, 1).style.color = RED;
            findCell(0, 2).style.color = RED;
            alert("Победили нолики!");
            gameCompletionStatus = true;
        }

        // CROSSES
        for (i = 0; i < 3; i++) {
            if (findCell(i, 0).innerHTML === CROSS && findCell(i, 1).innerHTML === CROSS && findCell(i, 2).innerHTML === CROSS) {
                findCell(i, 0).style.color = RED;
                findCell(i, 1).style.color = RED;
                findCell(i, 2).style.color = RED;
                alert("Победили крестики!");
                gameCompletionStatus = true;
            }
            if (findCell(0, i).innerHTML === CROSS && findCell(1, i).innerHTML === CROSS && findCell(2, i).innerHTML === CROSS) {
                findCell(0, i).style.color = RED;
                findCell(1, i).style.color = RED;
                findCell(2, i).style.color = RED;
                alert("Победили крестики!");
                gameCompletionStatus = true;
            }
        }
        if (findCell(0, 0).innerHTML === CROSS && findCell(1, 1).innerHTML === CROSS && findCell(2, 2).innerHTML === CROSS) {
            findCell(0, 0).style.color = RED;
            findCell(1, 1).style.color = RED;
            findCell(2, 2).style.color = RED;
            alert("Победили крестики!");
            gameCompletionStatus = true;
        }
        if (findCell(2, 0).innerHTML === CROSS && findCell(1, 1).innerHTML === CROSS && findCell(0, 2).innerHTML === CROSS) {
            findCell(2, 0).style.color = RED;
            findCell(1, 1).style.color = RED;
            findCell(0, 2).style.color = RED;
            alert("Победили крестики!");
            gameCompletionStatus = true;
        }
    }
}

function renderSymbolInCell (symbol, row, col, color = '#333') {
    const targetCell = findCell(row, col);

    targetCell.textContent = symbol;
    targetCell.style.color = color;
}

function findCell (row, col) {
    const targetRow = container.querySelectorAll('tr')[row];
    return targetRow.querySelectorAll('td')[col];
}

function addResetListener () {
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetClickHandler);
}

function resetClickHandler () {
    stepsCounter = 0;
    gameCompletionStatus = false;
    startGame();
}


/* Test Functions */
/* Победа первого игрока */
function testWin () {
    clickOnCell(0, 2);
    clickOnCell(0, 0);
    clickOnCell(2, 0);
    clickOnCell(1, 1);
    clickOnCell(2, 2);
    clickOnCell(1, 2);
    clickOnCell(2, 1);
}

/* Ничья */
function testDraw () {
    clickOnCell(2, 0);
    clickOnCell(1, 0);
    clickOnCell(1, 1);
    clickOnCell(0, 0);
    clickOnCell(1, 2);
    clickOnCell(1, 2);
    clickOnCell(0, 2);
    clickOnCell(0, 1);
    clickOnCell(2, 1);
    clickOnCell(2, 2);
}

function clickOnCell (row, col) {
    findCell(row, col).click();
}
