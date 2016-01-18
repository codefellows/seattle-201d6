var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');

first.addEventListener('click', handleClickOnFirst);
second.addEventListener('click', handleClickOnSecond);
third.addEventListener('click', handleClickOnThird);

var firstClicks = 0;
var secondClicks = 0;
var thirdClicks = 0;

function handleClickOnFirst() {
  firstClicks++;
  first.textContent = 'First was clicked ' + firstClicks + ' times';
  if (firstClicks % 3 === 0) {
    first.textContent = 'I AM DIVISIBLE BY 3!';
  }
}

function handleClickOnSecond() {
  secondClicks += 1;
  second.textContent = 'Second was clicked ' + secondClicks + ' times';
}

function handleClickOnThird() {
  thirdClicks += 1;
  third.textContent = 'Third was clicked ' + thirdClicks + ' times';
}
