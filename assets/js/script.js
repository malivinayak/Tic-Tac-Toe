
var P1 = true;
var choice = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];

function box1() {
    if (choice[0][0] == "-") {
        document.getElementById("box1").innerHTML = P1 ? "X" : "O";
        choice[0][0] = P1 ? "X" : "O";
        checkResult();
        P1 = !P1;
    }
}
function box2() {
    if (choice[0][1] == "-") {
        document.getElementById("box2").innerHTML = P1 ? "X" : "O";
        choice[0][1] = P1 ? "X" : "O";
        checkResult();
        P1 = !P1;
    }
}
function box3() {
    if (choice[0][2] == "-") {
        document.getElementById("box3").innerHTML = P1 ? "X" : "O";
        choice[0][2] = P1 ? "X" : "O";
        checkResult();
        P1 = !P1;
    }
}
function box4() {
    if (choice[1][0] == "-") {
        document.getElementById("box4").innerHTML = P1 ? "X" : "O";
        choice[1][0] = P1 ? "X" : "O";
        checkResult();
        P1 = !P1;
    }
}
function box5() {
    if (choice[1][1] == "-") {
        document.getElementById("box5").innerHTML = P1 ? "X" : "O";
        choice[1][1] = P1 ? "X" : "O";
        checkResult();
        P1 = !P1;
    }
}
function box6() {
    if (choice[1][2] == "-") {
        document.getElementById("box6").innerHTML = P1 ? "X" : "O";
        choice[1][2] = P1 ? "X" : "O";
        checkResult();
        P1 = !P1;
    }
}
function box7() {
    if (choice[2][0] == "-") {
        document.getElementById("box7").innerHTML = P1 ? "X" : "O";
        choice[2][0] = P1 ? "X" : "O";
        checkResult();
        P1 = !P1;
    }
}
function box8() {
    if (choice[2][1] == "-") {
        document.getElementById("box8").innerHTML = P1 ? "X" : "O";
        choice[2][1] = P1 ? "X" : "O";
        checkResult();
        P1 = !P1;
    }
}
function box9() {
    if (choice[2][2] == "-") {
        document.getElementById("box9").innerHTML = P1 ? "X" : "O";
        choice[2][2] = P1 ? "X" : "O";
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
    if (emptyCells === 0) {
        document.getElementById("result").innerHTML = "It's a Draw!";
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }
    document.getElementById("result").innerHTML = !P1 ? "Player X Turn" : "Player O Turn";
}
function isWinner(a, b) {
    if (a == 3 || b == 3) {
        setTimeout(() => {
            document.getElementById("result").className = "animated-title"
            document.getElementById("result").innerHTML = a == 3 ? "Player 1 Win" : "Player 2 Win";
        }, 0);
      
  
      setTimeout(function () {
      
        for (var x = 1; x <= 9; x++) {
          const button = document.getElementById("box" + x);
          button.disabled = true;
        }
  
        // Delay the page reload by 2 seconds
        setTimeout(function () {
          window.location.reload();
        }, 2000);
  
      }, 0);
  
      // Prevent further state changes after a win
      for (var x = 1; x <= 9; x++) {
        const button = document.getElementById("box" + x);
        button.disabled = true;
      }
    }
  }
  
  let popup = document.getElementById("popup");
  function openPopup(){

    popup.classList.add("open-popup");
  }
  function closePopup(){
    popup.classList.remove("open-popup")
    popup.classList.add("fade-out"); 
    setTimeout(() => {
    popup.classList.remove("visible");
    popup.classList.remove("fade-out");
  }, 1000); 
  }



  var P1 = true;
var choice = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];

var moveStack = []; // Stack to store moves for undo

function boxClick(row, col) {
    if (choice[row][col] == "-" && !isGameOver()) {
        var boxId = "box" + (row * 3 + col + 1);
        var currentPlayerSymbol = P1 ? "X" : "O";

        document.getElementById(boxId).innerHTML = currentPlayerSymbol;
        choice[row][col] = currentPlayerSymbol;

        // Store the move for possible undo
        moveStack.push({ row: row, col: col });

        // Check for a win or draw
        checkResult();
        P1 = !P1;

        // Update player turn
        document.getElementById("result").innerHTML = P1 ? "Player X Turn" : "Player O Turn";
    }
}

function isGameOver() {
    return moveStack.length === 9 || checkWin(choice, "X") || checkWin(choice, "O");
}

function checkResult() {
    if (checkWin(choice, "X")) {
        displayResult("Player 1 (X) wins!");
    } else if (checkWin(choice, "O")) {
        displayResult("Player 2 (O) wins!");
    } else if (moveStack.length === 9) {
        displayResult("It's a draw!");
    }
}

function displayResult(message) {
    document.getElementById("result").innerHTML = message;
}

function checkWin(board, player) {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true; // Check rows
        }
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true; // Check columns
        }
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true; // Check diagonal \
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true; // Check diagonal /
    }
    return false;
}

function undoMove() {
    if (moveStack.length > 0 && !isGameOver()) {
        // Get the last move
        var lastMove = moveStack.pop();
        var row = lastMove.row;
        var col = lastMove.col;

        // Clear the box and update the choice array
        var boxId = "box" + (row * 3 + col + 1);
        document.getElementById(boxId).innerHTML = "";
        choice[row][col] = "-";

        // Update player turn
        P1 = !P1;
        document.getElementById("result").innerHTML = P1 ? "Player X Turn" : "Player O Turn";
    }
}

function resetGame() {
    for (var i = 1; i <= 9; i++) {
        var box = document.getElementById("box" + i);
        box.innerHTML = "";
        box.disabled = false;
    }
    choice = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ];
    P1 = true;
    document.getElementById("result").innerHTML = "Player X Turn";
    moveStack = [];
}
