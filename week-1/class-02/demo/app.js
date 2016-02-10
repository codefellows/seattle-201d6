// JS file for Feb 9 class demo
// A guessing game about you with 5 questions for the user, and a different response to the user depending upon if the y got the right or wrong answer.

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);

alert('Hi there, ' + userName + ', I\'m going to ask you some questions about me. Please answer Y or N');

var answer1 = prompt('Was Sam born in South Dakota?');
console.log('The user answer to Question 1 was ' + answer1);
if (answer1.toLowerCase() === 'n' || answer1.toUpperCase() === 'NO') {
  alert('Nice! I was borned in Germany');
  console.log(userName + ' nailed Question 1');
} else if (answer1 === 'Y') {
  alert('Sorry, you\'re wrong!!!');
} else {
  alert('You should have given a Y or N answer, so you lose this round.');
}
