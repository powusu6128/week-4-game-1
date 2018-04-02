var wins = 0;

var losses = 0;

var randomnumber;

var score = 0;

var crystals_Numbers = [0, 0, 0, 0];

function resetgame() {

    for (var i = 0; i < crystals_Numbers.length; i++) {

      crystals_Numbers[i] = Math.floor(Math.random() * 12) + 1;


       console.log(crystals_Numbers[i]);

    }

    randomnumber = Math.floor(Math.random() * 102) + 19;

    score = 0;

    updatescreen();

}

function updatescreen() {

  $(".info").text("Your total score: " + score);

  $(".randomnumber").text(randomnumber);

  $(".wins").text("Wins: " + wins);
  $(".losses").text("Losses: " + losses);

}

function checkscore() {

  if (score > randomnumber) {

    losses++;

    resetgame();

  } else if (score === randomnumber) {

    wins++;

    resetgame();

  }

  updatescreen();

}

$(document).ready(function() {

  $(".Crystals").on("click", function() {

    score = score + crystals_Numbers[0];
    $(".score").text(crystals_Numbers[0]);
    checkscore();

  });

  $(".crystal").on("click", function() {

    score = score + crystals_Numbers[1];
    $(".score").text(crystals_Numbers[1]);
    checkscore();
  });

  $(".crystal").on("click", function() {

    score = score + crystals_Numbers[2];
    $(".score").text(crystals_Numbers[2]);
    checkscore();

  });

  $(".crytal").on("click", function() {

    score = score + crystals_Numbers[3];
    $(".score").text(crystals_Numbers[3]);
    checkscore();

  });

  $(".instructions").scroll();

  resetgame();

})
