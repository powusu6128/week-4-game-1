var wins = 0;

var losses = 0;

var currentValue = 0;

var randomnumber;

var playing;

var score = 0;

// link to the audio file
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/music/Theme.mp3");

var crystals_Numbers = [0, 0, 0, 0];

function reset() {

  for (var i = 0; i < crystals_Numbers.length; i++)

    crystals_Numbers[i] = Math.floor(Math.random() * 12) + 1;


  randomnumber = Math.floor(Math.random() * 102) + 19;

  score = 0;

  currentValue =0;

  updatescreen();

}

function updatescreen() {

  $(".info").text("Your total score: " + score);

  $(".randomnumber").text(randomnumber);

  $(".wins").text("Wins: " + wins);

  $(".losses").text("Losses: " + losses);

  $(".score").text(currentValue);

  //play audio when game is in progress.
  currentValue>0? audioElement.play():audioElement.pause();
}

function checkscore() {

  if (score > randomnumber) {

    losses++;

    reset();

  } else if (score === randomnumber) {

    wins++;

    reset();
  }

  updatescreen();

}

$(document).ready(function() {

  $("#button1").on("click", function() {

    currentValue = crystals_Numbers[0];

    score += currentValue;

    $(".info").text(score);

    checkscore();

  });

  $("#button2").on("click", function() {

    currentValue = crystals_Numbers[1]

    score += currentValue;

    $(".info").text(score);

    checkscore();

  });

  $("#button3").on("click", function() {

    currentValue = crystals_Numbers[2];

    score += currentValue;

    $(".info").text(score);

    checkscore();

  });

  $("#button4").on("click", function() {

    currentValue = crystals_Numbers[3];

    score += currentValue;

    $(".info").text(score);

    checkscore();

  });
  // insert a scroll pane to populate pages
  $(".instructions").scroll();

  reset();

})
