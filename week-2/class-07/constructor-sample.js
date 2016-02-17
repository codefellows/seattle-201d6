// Sample use of constructor

function PizzaShop (locationName, storeData) {
  this.locationName = locationName;
  this.storeData = storeData;
}

PizzaShop.prototype.calcPizzasPerHr = function() {

}

PizzaShop.prototype.makeTableRow = function() {

}

var ballard = new PizzaShop('Ballard', ballardData);
