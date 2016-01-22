// 'use strict';

// benton = 'wizard';

var taValues = [8 ,6, 2, 4];

var kevin = [
  {
    value: taValues[0],
    label: 'Hambella',
    color: '#811BD6',
    highlight: '#811B33'
  },
  {
    value: taValues[1],
    label: 'Kris',
    color: '#9CBABA',
    highlight: '#9CBA99'
  },
  {
    value: taValues[2],
    label: 'Benton',
    color: '#D18177',
    highlight: '#D18133'
  },
  {
    value : taValues[3],
    label: 'Dan',
    color: '#6AE128',
    highlight: '#6AE199'
  }
];

var context = document.getElementById('popularity').getContext('2d');

// Event listeners on Buttons
var clearLS = document.getElementById('lsClear');

var handleLSClear = function() {
  console.log('cleariing Local Storage');
  localStorage.clear();
};

clearLS.addEventListener('click', handleLSClear);

var buttons = document.getElementsByClassName('voteForMe');

var voteNow = function(evt) {
  var index = parseInt(evt.target.id);
  console.log(index);
  popularityChart.segments[index].value += 1;
  kevin[index].value += 1;
  localStorage.setItem('chartPersist', JSON.stringify(kevin));
  popularityChart.update();
  popularityChart.scale.yLabels = ['zero', 'a-hole', 'bozo', 'chump', 'meh', 'tolerable', 'good', 'awesome', 'amazesauce', 'hella', 'lord of the ta'];
};

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', voteNow);
}

// Persist data in HTML5 Local Storage
var chartData = localStorage.getItem('chartPersist');
if (chartData) {
  kevin = JSON.parse(chartData);
} else {
  console.log('Local storage empty!! Initializing!');
  localStorage.setItem('chartPersist', JSON.stringify(kevin));
}

var popularityChart = new Chart(context).PolarArea(kevin, {
  animationSteps : 225,
  animationEasing : 'easeOutBounce',
  animateRotate : true,
  animateScale : true,
  scaleShowLabelBackdrop : true
});

popularityChart.scale.yLabels = ['zero', 'a-hole', 'bozo', 'chump', 'meh', 'tolerable', 'good', 'awesome', 'amazesauce', 'hella', 'lord of the ta'];
