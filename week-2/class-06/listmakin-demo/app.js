// JS file for Feb 15 class demo
'use strict';

var listFodder = ['wizard pajamas', 23, false, 'woooo', 'brains', 99];
var placeForMahList = document.getElementById('ballard');

function listify(stuffToBeListed) {
  // for loop to iterate thru yon array
  for (var i = 0; i < stuffToBeListed.length; i++) {
    // build an <li> element
    var liEl = document.createElement('li');
    liEl.textContent = stuffToBeListed[i];
    // put it in the DOM
    placeForMahList.appendChild(liEl);
  }
}

listify(listFodder);
