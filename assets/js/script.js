var currentPlayer = "X";
var choice = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];
var gameOver = false;

function win() {
    var audio = document.getElementById("win");
    audio.play();
}

function draw() {
    var audio = document.getElementById("tie");
    audio.play();
}

function box1() {
    makeMove(0, 0, "box1");
}
function box2() {
    makeMove(0, 1, "box2");
}
function box3() {
    makeMove(0, 2, "box3");
}
function box4() {
    makeMove(1, 0, "box4");
}
function box5() {
    makeMove(1, 1, "box5");
}
function box6() {
    makeMove(1, 2, "box6");
}
function box7() {
    makeMove(2, 0, "box7");
}
function box8() {
    makeMove(2, 1, "box8");
}
function box9() {
    makeMove(2, 2, "box9");
}

function makeMove(row, col, boxId) {
    if (!gameOver && choice[row][col] == "-") {
        document.getElementById(boxId).textContent = currentPlayer;
        choice[row][col] = currentPlayer;
        var result = checkResult();

        if (result === "continue") {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            displayturn("Player " + currentPlayer + " Turn");
        } else {
            gameOver = true;
            displayResult(result);
            if (result === "X Wins!" || result === "O Wins!") {
                win();
            } else if (result === "It's a Draw!") {
                draw();
            }
            setTimeout(() => {
                resetGame();
            }, 3000);

            // Disable all buttons
            for (var x = 1; x <= 9; x++) {
                const button = document.getElementById("box" + x);
                button.disabled = true;
            }
        }
    }
}

function checkResult() {
    var winner = null;

    // Check for a win
    for (let i = 0; i < 3; i++) {
        if (choice[i][0] === currentPlayer && choice[i][1] === currentPlayer && choice[i][2] === currentPlayer) {
            winner = currentPlayer;
            break;
        }
        if (choice[0][i] === currentPlayer && choice[1][i] === currentPlayer && choice[2][i] === currentPlayer) {
            winner = currentPlayer;
            break;
        }
    }

    if (!winner && choice[0][0] === currentPlayer && choice[1][1] === currentPlayer && choice[2][2] === currentPlayer) {
        winner = currentPlayer;
    }

    if (!winner && choice[0][2] === currentPlayer && choice[1][1] === currentPlayer && choice[2][0] === currentPlayer) {
        winner = currentPlayer;
    }

    if (winner) {
        return winner + " Wins!";
    }

    // Check for a draw
    var isDraw = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (choice[i][j] === "-") {
                isDraw = false;
                break;
            }
        }
    }

    if (isDraw) {
        return "It's a Draw!";
    }

    return "continue";
}

function displayturn(message) {
    var resultElement = document.getElementById("result");
    resultElement.textContent = message;
}

function displayResult(message) {
    var resultElement = document.getElementById("result");
    resultElement.textContent = message;
}

function resetGame() {
    currentPlayer = "X";
    choice = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ];
    clearBoard();
    document.getElementById("result").textContent = "";
    displayturn("Player " + currentPlayer + " Turn");
    gameOver = false; // Reset gameOver
    
    // Enable all buttons
    for (var x = 1; x <= 9; x++) {
        const button = document.getElementById("box" + x);
        button.disabled = false;
    }
}

function clearBoard() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById("box" + i).textContent = "";
    }
}

function openPopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
    popup.classList.add("fade-out");
    setTimeout(() => {
        popup.classList.remove("visible");
        popup.classList.remove("fade-out");
    }, 1000);
}

// Start the game
displayturn("Player " + currentPlayer + " Turn");