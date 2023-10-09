var P1 = true;
var moves = [];
var choice = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];

// Function to reset the game
function resetGame() {
    for (let i = 1; i <= 9; i++) {
        const button = document.getElementById("box" + i);
        button.innerHTML = "";
        button.disabled = false;
    }
    P1 = true;
    choice = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ];
    document.getElementById("result").innerHTML = "1st Player Turn";
}

// Function to undo the last move
function undoMove() {
    if (moves.length > 0) {
        const [row, col] = moves.pop(); // Get the most recent move
        const button = document.getElementById("box" + (row * 3 + col + 1));
        button.innerHTML = "";
        button.disabled = false;
        choice[row][col] = "-";
        P1 = !P1;
        document.getElementById("result").innerHTML = P1 ? "1st Player Turn" : "2nd Player Turn";
    }
}

// Helper function to get the coordinates of the last move
function getLastMove() {
    for (let row = 2; row >= 0; row--) {
        for (let col = 2; col >= 0; col--) {
            if (choice[row][col] !== "-") {
                return [row, col];
            }
        }
    }
    return null; // No moves made yet
}

function box1() {
    if (choice[0][0] == "-") {
        document.getElementById("box1").innerHTML = P1 ? "X" : "O";
        choice[0][0] = P1 ? "X" : "O";
        moves.push([0, 0]);
        checkResult();
        P1 = !P1;
    }
}

function box2() {
    if (choice[0][1] == "-") {
        document.getElementById("box2").innerHTML = P1 ? "X" : "O";
        choice[0][1] = P1 ? "X" : "O";
        moves.push([0, 1]);
        checkResult();
        P1 = !P1;
    }
}

function box3() {
    if (choice[0][2] == "-") {
        document.getElementById("box3").innerHTML = P1 ? "X" : "O";
        choice[0][2] = P1 ? "X" : "O";
        moves.push([0, 2]);
        checkResult();
        P1 = !P1;
    }
}

function box4() {
    if (choice[1][0] == "-") {
        document.getElementById("box4").innerHTML = P1 ? "X" : "O";
        choice[1][0] = P1 ? "X" : "O";
        moves.push([1, 0]);
        checkResult();
        P1 = !P1;
    }
}

function box5() {
    if (choice[1][1] == "-") {
        document.getElementById("box5").innerHTML = P1 ? "X" : "O";
        choice[1][1] = P1 ? "X" : "O";
        moves.push([1, 1]);
        checkResult();
        P1 = !P1;
    }
}

function box6() {
    if (choice[1][2] == "-") {
        document.getElementById("box6").innerHTML = P1 ? "X" : "O";
        choice[1][2] = P1 ? "X" : "O";
        moves.push([1, 2]);
        checkResult();
        P1 = !P1;
    }
}

function box7() {
    if (choice[2][0] == "-") {
        document.getElementById("box7").innerHTML = P1 ? "X" : "O";
        choice[2][0] = P1 ? "X" : "O";
        moves.push([2, 0]);
        checkResult();
        P1 = !P1;
    }
}

function box8() {
    if (choice[2][1] == "-") {
        document.getElementById("box8").innerHTML = P1 ? "X" : "O";
        choice[2][1] = P1 ? "X" : "O";
        moves.push([2, 1]);
        checkResult();
        P1 = !P1;
    }
}

function box9() {
    if (choice[2][2] == "-") {
        document.getElementById("box9").innerHTML = P1 ? "X" : "O";
        choice[2][2] = P1 ? "X" : "O";
        moves.push([2, 2]);
        checkResult();
        P1 = !P1;
    }
}

function checkResult() {
    var r1 = 0, r2 = 0;
    var emptyCells = 0; // Track the number of empty cells
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (choice[i][j] == "X") {
                r1++;
            } else if (choice[i][j] == "O") {
                r2++;
            } else {
                emptyCells++; // Count empty cells
            }
        }
        isWinner(r1, r2);
        r1 = 0;
        r2 = 0;
    }

    var c1 = 0, c2 = 0;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (choice[j][i] == "X") {
                c1++;
            } else if (choice[j][i] == "O") {
                c2++;
            }
        }
        isWinner(c1, c2);
        c1 = 0;
        c2 = 0;
    }

    var d1 = 0, d2 = 0;
    for (i = 0; i < 3; i++) {
        if (choice[i][i] == "X") {
            d1++;
        } else if (choice[i][i] == "O") {
            d2++;
        }
    }
    isWinner(d1, d2);
    d1 = 0;
    d2 = 0;
    for (i = 0; i < 3; i++) {
        if (choice[i][2 - i] == "X") {
            d1++;
        } else if (choice[i][2 - i] == "O") {
            d2++;
        }
    }
    isWinner(d1, d2);

    // Check for a draw
    if (emptyCells === 0 && !isWinner(r1, r2) && !isWinner(c1, c2) && !isWinner(d1, d2)) {
        document.getElementById("result").innerHTML = "It's a Draw!";
        playTieSound(); // Play the tie sound
        setTimeout(function () {
            window.location.reload();
        }, 3000);
    } else {
        document.getElementById("result").innerHTML = !P1 ? "1st Player Turn" : "2nd Player Turn";
    }
}

function isWinner(a, b) {
    if (a == 3 || b == 3) {
        setTimeout(() => {
            document.getElementById("result").className = "animated-title"
            document.getElementById("result").innerHTML = a == 3 ? "Player 1 Win" : "Player 2 Win";
            playWinSound(); // Play the win sound
        }, 0);

        setTimeout(function () {
            for (var x = 1; x <= 9; x++) {
                const button = document.getElementById("box" + x);
                button.disabled = true;
            }

            // Delay the page reload by 2 seconds
            setTimeout(function () {
                window.location.reload();
            }, 3000);
        }, 0);

        // Prevent further state changes after a win
        for (var x = 1; x <= 9; x++) {
            const button = document.getElementById("box" + x);
            button.disabled = true;
        }
    }
}

// Function to play the win sound
function playWinSound() {
    var winSound = document.getElementById("win");
    winSound.play(); // Play the win sound
}

// Function to play the tie sound
function playTieSound() {
    var tieSound = document.getElementById("tie");
    tieSound.play(); // Play the tie sound
}

let popup = document.getElementById("popup");
function openPopup() {

    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup")
    popup.classList.add("fade-out");
    setTimeout(() => {
        popup.classList.remove("visible");
        popup.classList.remove("fade-out");
    }, 1000);
}
