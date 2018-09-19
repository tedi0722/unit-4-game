$(document).ready(function (){

// global variables & grabbing by ID
var randomNumber = $("#random-number");
var totalScore = $("#total-score");
var wins = $("#wins");
var losses = $("#losses");
var red = $("#red");
var blue = $("#blue");
var yellow = $("#yellow");
var green = $("#green");

// function to randomize numbers
function randomize (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// initializing the game
function init () {
    wins = 0;
    losses = 0;
    totalScore = 0;
    randomNumber = randomize(19, 120);
    red = randomize(1, 12);
    blue = randomize(1, 12);
    yellow = randomize(1, 12);
    green = randomize(1, 12);
    $("#random-number").html("<h3>" + "Random Number: " + "</h3>" + "<h2>" + randomNumber + "</h2>");
    $("#total-score").html("<h3>" + "Total Score:&nbsp" + "</h3>" + "<h2>" + totalScore + "</h2>");
    $("#wins").html("<h3>" + "Wins:&nbsp" + "</h3>" + "<h3>" + wins + "</h3>");
    $("#losses").html("<h3>" + "Losses:&nbsp" + "</h3>" + "<h3>" + losses + "</h3>");
}

// Win & Lose Actions Function
function winLose () {
    if (totalScore == randomNumber) {
        alert("You've won!")
        wins++;
        reset();
    }
    else if (totalScore > randomNumber) {
        alert("You've lost!")
        losses++;
        reset();
    }
}

// add to score function
function addScore (value) {
    totalScore += value
}

// display total score, wins, and losses
function display () {
    $("#total-score").html("<h3>" + "Total Score:&nbsp" + "</h3>" + "<h2>" + totalScore + "</h2>");
    $("#wins").html("<h3>" + "Wins:&nbsp" + "</h3>" + "<h3>" + wins + "</h3>");
    $("#losses").html("<h3>" + "Losses:&nbsp" + "</h3>" + "<h3>" + losses + "</h3>");
}

// click function and adding numbers to total score and check if win/lose
function click () {
$("#red").on("click", function () {
    addScore(red);
    winLose();
    display();
});
$("#blue").on("click", function () {
    addScore(blue);
    winLose();
    display();
});
$("#yellow").on("click", function () {
    addScore(yellow);
    winLose();
    display();
});
$("#green").on("click", function () {
    addScore(green);
    winLose();
    display();
});
}

// resetting the game when either win OR lose
function reset () {
    totalScore = 0;
    randomNumber = randomize(19, 120);
    red = randomize(1, 12);
    blue = randomize(1, 12);
    yellow = randomize(1, 12);
    green = randomize(1, 12);
    $("#random-number").html("<h3>" + "Random Number: " + "</h3>" + "<h2>" + randomNumber + "</h2>");
    $("#total-score").html("<h3>" + "Total Score:&nbsp" + "</h3>" + "<h3>" + totalScore + "</h3>");
}

init();
click();

});
