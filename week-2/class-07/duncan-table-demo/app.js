'use strict'
console.log('YAYAYAY!!!! Table Genoration!!!!!')

// Organization: Variables at top
var table = document.createElement('table');

var rowOneLables = ['Name', 'Age', 'Super Power'];
var rowTwoLables = ['Nena', '12', 'Flying'];
var rowThreeLables = ['David', '15', 'Lulwat'];
var rowOne= createTableRow(rowOneLables);
var rowTwo = createTableRow(rowTwoLables);
var rowThree = createTableRow(rowThreeLables);

// Organization: Constructers -- dont have yet
// Organization: Instance Variables -- dont have yet

// Organization: function declarations
function createTableRow(stringArray){
  var newTR = document.createElement('tr');
  for(var i=0; i<stringArray.length; i++){
    var newTD = document.createElement('td');
    newTD.textContent = stringArray[i];
    newTR.appendChild(newTD);
  }
  return newTR;
}

// Organization: logic // function calls
table.appendChild(rowOne);
table.appendChild(rowTwo);
table.appendChild(rowThree);
document.body.appendChild(table);

// Organization: event handlers
// Organization: event listeners
