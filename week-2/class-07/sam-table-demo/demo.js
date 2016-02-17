// Sam's quick & dirty table demo

// table data
var stuffForFirstRow = ['wizards', 34, 66, 13, 8, 5];
var stuffForSecondRow = ['potatoes', 2, 81, 99, 57, 4];

// access the table element in the HTML
var tableEl = document.getElementById('kanye');

function tableRowMaker(inputArray) {
  // make a table row
  var trEl = document.createElement('tr');
  // iterate thru array
  for(var i = 0; i < inputArray.length; i++) {
    var tdEl = document.createElement('td'); //create
    tdEl.textContent = inputArray[i]; // content
    trEl.appendChild(tdEl); // add cell to row
  }
  tableEl.appendChild(trEl); // add row to table
}

tableRowMaker(stuffForFirstRow);
tableRowMaker(stuffForSecondRow);
