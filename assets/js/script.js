
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
            window.location.reload(); // Reload the window after a brief delay
        }, 2000); // You can adjust the delay time (in milliseconds) as needed
    }
}


function isWinner(a,b){
    if (a == 3 || b == 3) {
        
        document.getElementById("result").innerHTML = a == 3 ? "Player 1 Win" : "Player 2 Win";
        if(document.getElementById("result").innerHTML=="Player 1 Win")  alert("Player 1 Win Hurray !")
        else alert("Player 2 win Hurray !");
        for (var x = 1; x <= 9; x++) {
            const button = document.getElementById("box" + x);
            button.disabled = true;
        }
        setTimeout(function() {
            window.location.reload(); 
        }, 2000);
    }
}