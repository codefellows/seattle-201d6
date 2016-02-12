// Here is what your questions look like meow

var secretNumber = 6;
var userGuess = parseInt(prompt('My secret number is between 1 and 10. Can you guess it?'));
if (userGuess === secretNumber) {
  alert('BAM! You got it!');
} else {
  alert('Sorry, it\'s not ' + userGuess);
}

//Here's the same thing in a function (declaration and call)

function numberGuess() {
  var secretNumber = 6;
  var userGuess = parseInt(prompt('My secret number is between 1 and 10. Can you guess it?'));
  if (userGuess === secretNumber) {
    alert('BAM! You got it!');
  } else {
    alert('Sorry, it\'s not ' + userGuess);
  }
}

numberGuess();
