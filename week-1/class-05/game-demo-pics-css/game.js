var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');

function firstQuestion() {
  var ans1 = prompt('Did Sam live in South Dakota for 8 years?');
  if (ans1.toLowerCase() === 'n' || ans1.toUpperCase() === 'NO') {
    // alert('You\'re right! Sam never lived in South Dakota!');
    res1.textContent = 'You\'re right! Sam never lived in South Dakota!';
  } else if (ans1.toLowerCase() === 'y' || ans1.toUpperCase() === 'YES') {
    // alert('Nope! Sam never lived in South Dakota!');
    res1.textContent = 'Nope! Sam never lived in South Dakota!';
  } else {
    alert('Please give a yes or no answer.');
  }
}

function secondQuestion() {
  var ans2 = prompt('Does Sam have any dogs?');
  if (ans2.toLowerCase() === 'n' || ans2.toUpperCase() === 'NO') {
    alert('Wrong! Sam has two dogs!');
  } else if (ans2.toLowerCase() === 'y' || ans2.toUpperCase() === 'YES') {
    res2.textContent = 'Correct! Demi is a border collie and Parker is a melan collie.';
  } else {
    res2.textContent = 'Please give a yes or no answer.';
  }
}

firstQuestion();
secondQuestion();
