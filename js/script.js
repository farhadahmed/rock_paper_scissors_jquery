$(function() {

  //Prevents button click from refreshing page
  $('form').submit(function(e) {
    return false;
  });

  $('button').on('click', function() {

    //Clear section with each button click
    $('#outcome').empty();

    var userInput = $('#user-choice').val();
    var computerChoice = Math.floor(Math.random()*3);
    var result = '';
    var lost = 'You lost!';
    var win = 'Hooray! You won!';

    if(computerChoice === 0) {computerChoice = 'rock'};
    if(computerChoice === 1) {computerChoice = 'paper'};
    if(computerChoice === 2) {computerChoice = 'scissors'};

    if(userInput === computerChoice) { result = 'Tie' }

    else if(userInput === 'rock') {
      if (computerChoice === 'paper') {result = lost}
      else {result = win};
    }

    else if(userInput === 'paper') {
      if (computerChoice === 'scissors') {result = lost}
      else {result = win};
    }

    else if(userInput === 'scissors') {
      if (computerChoice === 'rock') {result = lost}
      else {result = win};
    }

    else {result = 'Please input valid data.'};

    $('<p> User choice: ' + userInput + '</p>').appendTo('#outcome');
    $('<p> Computer choice: ' + computerChoice + '</p>').appendTo('#outcome');
    $('<p><strong>' + result + '</strong></p>').appendTo('#outcome');

  });
});
