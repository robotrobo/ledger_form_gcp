let board;
let human = 'O';
let ai = 'X';
let winCombos = [
    // horizontals
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // verticals
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonals
    [0, 4, 8],
    [2, 4, 6]
]

const cells = document.querySelectorAll('.cell');

startGame();

function startGame() {
    board = Array.from(Array(9).keys());

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.removeProperty('background-color');
        cells[i].innerText = '';
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick() {
    if (typeof (board[this.id]) == 'number') { //after clicking it changes to 'X' or 'O'
        turn(this.id, human);
        if (!checkWin(board, human) && !checkTie()) turn(bestSpot(), ai);
    }
}

function turn(id, player) {
    board[id] = player;
    document.getElementById(id).innerText = player;
    let gameWon = checkWin(board, player);
    if (gameWon) {
        gameOver(gameWon);
    }
}

function checkWin(board, player) {
    let plays = [];
    for (let i = 0; i < board.length; i++) {
        if (document.getElementById(i).innerText == player) {
            plays.push(i)
        }
    }
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) { //using entries to get both the index and the key
        if (win.every(elem => plays.indexOf(elem) > -1)) { //checks if the player has played at every index in the combo
            gameWon = {
                index: index,
                player: player
            }
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor = gameWon.player == human ? "blue" : "red"
    } //highlighting the winning cells
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWin(gameWon.player == human ? "you win" : "ai wins");
}

function emptySquares() {
    return board.filter(elt => typeof elt == "number") //return all empty squrs


}


function bestSpot() {
    return minimax(board, ai).index;
}

function declareWin(who) {
    alert(who);
}

function checkTie() {

    if (emptySquares().length == 0) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "green";
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWin("Tie!");
        return true;
    }
    return false;
}


function minimax(board, player) {
    let availSpots = emptySquares();
    if (checkWin(board, human)) {
        return {
            score: -10
        };
    } else if (checkWin(board, ai)) {
        return {
            score: 20
        };
    } else if (availSpots.length == 0) {
        return {
            score: 0
        };

    }

    let moves = [];

    for (let i = 0; i < availSpots.length; i++) {
        let move = {};
        move.index = board[availSpots[i]];
        board[availSpots[i]] = player;
        if (player == ai) {
            let result = minimax(board, human);
            move.score = result.score;
        } else {
            let result = minimax(board, ai);
            move.score = result.score;
        }

        board[availSpots[i]] = move.index;
        moves.push(move);
    }
    let bestMove;
    if (player == ai) {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}