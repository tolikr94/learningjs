var player = "red";
var red = [];
var yellow = [];
var won = false;

function restart() {
  console.log("restart");
  $(".red").removeClass("red");
  $(".yellow").removeClass("yellow");
  won = false;
  yellow = [];
  red = [];
}

function win(p) {
  won = true;
  if (p === "red"){
    $(".msg").html("<span class = \"redtxt\">Red Won!</span> <br> Click here to play again");
  } else {
    $(".msg").html("<span class = \"yellowtxt\">Yellow Won! </span><br> Click here to play again");
  }
  $(".msg").removeClass("hidden");
}

function checkDiagonal1Red(t1, t2) {
  var nt1 = t1;
  var nt2 = t2;
  var score = 1;
  for (var i = 0; i < red.length; i++) {
    if (red[i][0] === nt1 && red[i][1] === nt2) {
      i = -1;
      nt1--;
      nt2--;
      score++;
      if (score >= 4) {
        console.log("Red Wins!");
        win(player);
      }
    }
  }
  nt1 = t1;
  nt2 = t2;
  for (var i = 0; i < red.length; i++) {
    if (red[i][0] === nt1 + 2 && red[i][1] === nt2 + 2) {
      i = -1;
      nt1++;
      nt2++;
      score++;
      if (score >= 4) {
        console.log("Red Wins!");
        win(player);
      }
    }
  }
}

function checkDiagonal2Red(t1, t2) {
  var nt1 = t1;
  var nt2 = t2;
  var score = 1;
  for (var i = 0; i < red.length; i++) {
    if (red[i][0] === nt1 && red[i][1] === nt2) {
      i = -1;
      nt1++;
      nt2--;
      score++;
      if (score >= 4) {
        console.log("Red Wins!");
        win(player);
      }
    }
  }
  nt1 = t1;
  nt2 = t2;
  for (var i = 0; i < red.length; i++) {
    if (red[i][0] === nt1 - 2 && red[i][1] === nt2 + 2) {
      i = -1;
      nt1--;
      nt2++;
      score++;
      if (score >= 4) {
        console.log("Red Wins!");
        win(player);
      }
    }
  }
}

function checkBottomRed(t1, t2) {
  var score = 1;
  for (var i = 0; i < red.length; i++) {
    if (red[i][0] === t1 && red[i][1] === t2) {
      i = -1;
      t2++;
      score++;
      if (score >= 4) {
        console.log("Red Wins!");
        win(player);
      }
    }
  }
}

function checkStraightRed(t1, t2) {
  var nt1 = t1;
  var score = 1;
  for (var i = 0; i < red.length; i++) {
    if (red[i][0] === nt1 && red[i][1] === t2) {
      i = -1;
      nt1--;
      score++;
      if (score >= 4) {
        console.log("Red Wins!");
        win(player);
      }
    }
  }
  nt1 = t1;
  for (var i = 0; i < red.length; i++) {
    if (red[i][0] === nt1 + 2 && red[i][1] === t2) {
      i = -1;
      nt1++;
      score++;
      if (score >= 4) {
        console.log("Red Wins!");
        win(player);
      }
    }
  }
}

function checkDiagonal1Yellow(t1, t2) {
  var nt1 = t1;
  var nt2 = t2;
  var score = 1;
  for (var i = 0; i < yellow.length; i++) {
    if (yellow[i][0] === nt1 && yellow[i][1] === nt2) {
      i = -1;
      nt1--;
      nt2--;
      score++;
      if (score >= 4) {
        win(player);
      }
    }
  }
  nt1 = t1;
  nt2 = t2;
  for (var i = 0; i < yellow.length; i++) {
    if (yellow[i][0] === nt1 + 2 && yellow[i][1] === nt2 + 2) {
      i = -1;
      nt1++;
      nt2++;
      score++;
      if (score >= 4) {
        win(player);
      }
    }
  }
}

function checkDiagonal2Yellow(t1, t2) {
  var nt1 = t1;
  var nt2 = t2;
  var score = 1;
  for (var i = 0; i < yellow.length; i++) {
    if (yellow[i][0] === nt1 && yellow[i][1] === nt2) {
      i = -1;
      nt1++;
      nt2--;
      score++;
      if (score >= 4) {
        win(player);
      }
    }
  }
  nt1 = t1;
  nt2 = t2;
  for (var i = 0; i < yellow.length; i++) {
    if (yellow[i][0] === nt1 - 2 && yellow[i][1] === nt2 + 2) {
      i = -1;
      nt1--;
      nt2++;
      score++;
      if (score >= 4) {
        win(player);
      }
    }
  }
}

function checkBottomYellow(t1, t2) {
  var score = 1;
  for (var i = 0; i < yellow.length; i++) {
    if (yellow[i][0] === t1 && yellow[i][1] === t2) {
      i = -1;
      t2++;
      score++;
      if (score >= 4) {
        win(player);
      }
    }
  }
}

function checkStraightYellow(t1, t2) {
  var nt1 = t1;
  var score = 1;
  for (var i = 0; i < yellow.length; i++) {
    if (yellow[i][0] === nt1 && yellow[i][1] === t2) {
      i = -1;
      nt1--;
      score++;
      if (score >= 4) {
        win(player);
      }
    }
  }
  nt1 = t1;
  for (var i = 0; i < yellow.length; i++) {
    if (yellow[i][0] === nt1 + 2 && yellow[i][1] === t2) {
      i = -1;
      nt1++;
      score++;
      if (score >= 4) {
        win(player);
      }
    }
  }
}

function checkForWin(i1, i2) {
  if (player === "red") {
    checkStraightRed(i1 - 1, i2); // Left Right
    checkBottomRed(i1, i2 + 1) // Bottom
    checkDiagonal1Red(i1 - 1, i2 - 1); // diagonal \
    checkDiagonal2Red(i1 + 1, i2 - 1); // diagonal /
    player = "yellow"; // at the end, change player to yellow
  } else {
    checkStraightYellow(i1 - 1, i2); // Left Right
    checkBottomYellow(i1, i2 + 1) // Bottom
    checkDiagonal1Yellow(i1 - 1, i2 - 1); // diagonal \
    checkDiagonal2Yellow(i1 + 1, i2 - 1); // diagonal /
    player = "red"; // at the end, change player to red
  }
}
// listen to click to start the game
$(".msg").on("click", function() {
  if (won === true) {
    restart();
  }
  $(".msg").addClass("hidden");
});

// hover effect
$(".gameColumn").on("mouseenter", function() {
  if (player === "red"){
    var clmn = this.querySelectorAll(".playBox.round");
    for (var i = clmn.length - 1; i >= 0; i--) {
      if ($(clmn[i]).hasClass("red") === false &&
        $(clmn[i]).hasClass("yellow") === false) {
        $(clmn[i]).addClass("redhover");
        $(".gameColumn").on("click", function() {
              $(clmn[i]).removeClass("redhover");
        });
        $(".gameColumn").on("mouseleave", function() {
              $(clmn[i]).removeClass("redhover");
        });
        break;
      }
    }
  } else {
    var clmn = this.querySelectorAll(".playBox.round");
    for (var i = clmn.length - 1; i >= 0; i--) {
      if ($(clmn[i]).hasClass("red") === false &&
        $(clmn[i]).hasClass("yellow") === false) {
        $(clmn[i]).addClass("yellowhover");
        $(".gameColumn").on("click", function() {
              $(clmn[i]).removeClass("yellowhover");
        });
        $(".gameColumn").on("mouseleave", function() {
              $(clmn[i]).removeClass("yellowhover");
        });
        break;
      }
    }
  }
});





// Listen for click on column, add selected class
$(".gameColumn").on("click", function() {
  var index1;
  for (var i = 0; i < document.querySelectorAll(".gameColumn").length; i++) {
    if (this === document.querySelectorAll(".gameColumn")[i]) {
      index1 = i;
    }
  }
  var clmn = this.querySelectorAll(".playBox.round");
  for (var i = clmn.length - 1; i >= 0; i--) {
    if ($(clmn[i]).hasClass("red") === false &&
      $(clmn[i]).hasClass("yellow") === false) {
      $(clmn[i]).addClass(player);
      if (player === "red") {
        checkForWin(index1, i);
        red.push([index1, i]);

      } else {
        checkForWin(index1, i);
        yellow.push([index1, i]);
      }
      break;
    }
  }
});
