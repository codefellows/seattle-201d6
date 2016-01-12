'use strict';

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikePlace = {
  name: 'Pike Place',
  minCustomer: 14,
  maxCustomer: 55,
  hourlyCust: [],
  avgCupsCust: 1.2,
  avgBeansCust: 3.7,
  hourlyCups: [],
  dailyCups: 0,
  hourlyBeansByLb: [],
  dailyBeansbyLb: 0,
  allDailyBeans: 0,

  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++){
     this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
   }
  },

  generateHourlyCups: function() {
    for (var i = 0; i < hours.length; i++) {
      var cups = this.avgCupsCust * this.hourlyCust[i];
      // console.log(parseFloat(cups.toFixed(1)));
      this.hourlyCups.push(parseFloat(cups.toFixed(1)));
      this.dailyCups += cups;
      this.allDailyBeans += (cups / 20);
    }
  },

  generateHourlyBeansByLb: function() {
    for (var i = 0; i < hours.length; i++) {
      var beans = Math.floor(this.avgBeansCust * this.hourlyCust[i]);
      this.hourlyBeansByLb.push(beans);
      this.dailyBeansByLb += beans;
    }
  },

  render: function() {
    this.hourlyCustomers();
    this.generateHourlyCups();
    this.generateHourlyBeansByLb();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('kiosk-data').appendChild(ulEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      //6:00am: 86.5 lbs [23 customers, 27.6 cups (1.4 lbs), 85.1 lbs to-go]
      liEl.textContent = hours[i] + ": " + this.allDailyBeans + ' [' + this.hourlyCust[i] + ' customers, ' + this.dailyCups + ' cups (' + (this.dailyCups / 20) + '), ' + this.dailyBeansByLb + ' lbs to-go]';
      ulEl.appendChild(liEl);
    }
  }
}

// pikePlace.hourlyCustomers();
// console.log(pikePlace.hourlyCust);
pikePlace.render();

// var kiosks = [pikePlace, capHill, seaPubLib, soLakeUnion, seaTac, webSales];
// for (var i = 0; i < kiosks.length; i++) {
//   kiosks[i].render();
// }
