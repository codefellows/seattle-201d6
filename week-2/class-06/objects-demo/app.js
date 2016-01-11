var duck = {
  material: 'rubber',
  color: 'yellow',
  squeaks: false,
  favoriteFoods: ['duckweed', 'peanut butter', 'children'],
  says: function() {
    console.log('QUACK!!!');
  }
};

var paragraphEl = document.createElement('p');
paragraphEl.textContent = duck.favoriteFoods;
document.body.appendChild(paragraphEl);

var h1El = document.createElement('h1');
h1El.textContent = duck.color;
document.body.appendChild(h1El);
