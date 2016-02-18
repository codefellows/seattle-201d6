// pizza demo

var PizzaShop = function(locationName, hourlyMins, hourlyMaxs) {
  this.locationName = locationName;
  this.hourlyMins = hourlyMins;
  this.hourlyMaxs = hourlyMaxs;
  this.pizzasEachHour = [];
  this.hoursOfOperation = ['8:00a', '9:00a', '10:00a', '11:00a', 'noon', '1:00p', '2:00p', '3:00p', '4:20'];
}

PizzaShop.prototype.calcHour = function(min, max) {
 // we'll use this to calculate hourly numbers in another method
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

PizzaShop.prototype.calcPizzasEachHour = function() {
  // longwinded that works is AWESOME
  for (var i = 0; i < this.hoursOfOperation.length; i++) {
    var soldThisHour = this.calcHour(this.hourlyMins[i], this.hourlyMaxs[i]);
    // console.log(this.hoursOfOperation[i] + ' ' + soldThisHour);
    this.pizzasEachHour.push(soldThisHour);
  }
}

PizzaShop.prototype.render = function() {

  this.calcPizzasEachHour();
  var shopTable = document.createElement('table');

  var trHeader1 = document.createElement('tr');

  tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trHeader1.appendChild(tdEl);

  tdEl = document.createElement('td');
  trHeader1.appendChild(tdEl);

  shopTable.appendChild(trHeader1);

  /// now to make 2nd header row
  var trHeader2 = document.createElement('tr');

  tdEl = document.createElement('td');
  tdEl.textContent = 'TIME';
  trHeader2.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = 'PIZZAS SOLD';
  trHeader2.appendChild(tdEl);

  shopTable.appendChild(trHeader2);

  for (var i = 0; i < this.hoursOfOperation.length; i++) {

    var trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = this.hoursOfOperation[i];
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.pizzasEachHour[i];
    trEl.appendChild(tdEl);

    shopTable.appendChild(trEl);
  }
  document.body.appendChild(shopTable);
}

var frelardMins = [1, 1, 1, 5, 5, 5, 56, 67, 999];
var frelardMaxs = [3, 3, 3, 9, 9, 9, 34, 99, 8765];
var frelard = new PizzaShop('Frelard', frelardMins, frelardMaxs);

var tokyoMins = [11, 11, 11, 15, 15, 15, 34, 66, 34567];
var tokyoMaxs = [13, 13, 13, 19, 29, 39, 66, 999, 87654];
var tokyo = new PizzaShop('Tokyo', tokyoMins, tokyoMaxs);

tokyo.render();
frelard.render();
