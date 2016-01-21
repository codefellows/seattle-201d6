// 'use strict';

// benton = 'wizard'

var taValues = [8 ,6, 7, 4];

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

var popularityChart = new Chart(context).PolarArea(kevin, {
    //Number - Amount of animation steps
    animationSteps : 225,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,
    scaleShowLabelBackdrop : true
});

popularityChart.scale.yLabels = ['a-hole', 'bozo', 'chump', 'meh', 'tolerable', 'good', 'awesome', 'amazesauce'];
