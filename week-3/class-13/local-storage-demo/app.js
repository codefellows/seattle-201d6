'use strict';

var benton = {
  name: 'Benton of Benetton',
  wizard: false,
  favoriteNumber: 12,
  laughs: function() {
    alert('HAHAHAHAHAHAHAHAHAHA');
  }
};

var arrayofAwesome = ['Sam', 57, true, 'kittens'];

var arrayOfCrap = ['potato', 12, false, benton, arrayofAwesome];

var clearLS = document.getElementById('clearMahLS');

clearLS.addEventListener('click', function() {
  console.log('click y\'all');
  localStorage.clear();
});


// STRINGIFY ALL THE THINGS

// localStorage.setItem()

// STUFF BE IN LOCAL STORAGE
// OUR STUFF IN LOCAL STORAGE WILL BE IN JSON
// AND NOT ONLY JSON...
// ...BUT STRINGIFIED JSON

// localStorage.getItem()
var retrievedAwesome = localStorage.getItem('awesome');

// UNSTRINGIFY IS ACTUALLY CALLED 'PARSE'
var parsedAwesome = JSON.parse(retrievedAwesome);
