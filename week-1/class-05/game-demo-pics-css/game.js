var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');

// var quesData = [[first ques stuff],[ second ques stuff]];
// var quesData = [[ques, ans1, ans2, right-mess, wrong-mess],[ second ques stuff]];
var quesData = [
  ['Did Sam live in South Dakota for 8 years?', 'n', 'NO', 'y', 'YES', 'Right! Sam never lived in South Dakota!', 'Nope! Sam never lived in South Dakota!', res1 ],
  ['Does Sam have any dogs?', 'y', 'YES', 'n', 'NO',  'Correct! Demi is a border collie and Parker is a melan collie.', 'Wrong! Sam has two dogs!', res2],
  ['Is Sam married to Victoria?', 'n', 'NO', 'y', 'YES', 'Correct! Victoria is his sister. I am married to Kimberly', 'WRONG!!! Even though Sam is from Alabama, he did not marry his sister!!!', res3]
];

function questions() {
  var ans1 = prompt(quesData[i][0]);
  if (ans1.toLowerCase() === quesData[i][1] || ans1.toUpperCase() === quesData[i][2]) {
    // CORRECT
    quesData[i][7].textContent = quesData[i][5];
    quesData[i][7].className = 'right';
  } else if (ans1.toLowerCase() === quesData[i][3] || ans1.toUpperCase() === quesData[i][4]) {
    // WRONG
    quesData[i][7].textContent = quesData[i][6];
    quesData[i][7].className = 'wrong';
  } else {
    alert('Please give a yes or no answer.');
  }
}

for (var i = 0; i < quesData.length; i++) {
  questions();
}
