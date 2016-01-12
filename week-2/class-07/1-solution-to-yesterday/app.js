'use strict';

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikePlace = {
  name: 'Pike Place',
  minCustomer: 14,
  maxCustomer: 55,
  avgCupsCust: 1.2,
  avgBeansCust: 3.7,
  hourlyCust: [],
  hourlyCups: [],
  hourlyCupsBeans: [],
  hourlyBeansByLb: [],
  allHourlyBeans: this.hourlyCupsBeans + this.hourlyBeansByLb,
  dailyPounds: 0,

  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++){
     this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
   }
  },

  generateHourlyCups: function() {
    for (var i = 0; i < hours.length; i++) {
      var cups = this.avgCupsCust * this.hourlyCust[i];
      this.hourlyCups.push(cups);
      this.hourlyCupsBeans.push(cups / 20);
      this.dailyPounds += (cups / 20);
    }
  },

  generateHourlyBeansByLb: function() {
    for (var i = 0; i < hours.length; i++) {
      var beans = this.avgBeansCust * this.hourlyCust[i];
      // console.log(parseFloat(beans.toFixed(1)));
      this.hourlyBeansByLb.push(beans);
      this.dailyPounds += beans;
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
      liEl.textContent = hours[i] + ": " + (this.hourlyCupsBeans[i] + this.hourlyBeansByLb[i]).toFixed(1) + ' lbs [' + this.hourlyCust[i] + ' customers, ' + this.hourlyCups[i].toFixed(1) + ' cups (' + this.hourlyCupsBeans[i].toFixed(1) + ' lbs), ' + this.hourlyBeansByLb[i].toFixed(1) + ' lbs to-go]';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'TOTAL DAILY POUNDS THIS LOCATION: ' + this.dailyPounds.toFixed(1);
    ulEl.appendChild(liEl);
  }
}

var capHill = {
  name: 'Capitol Hill',
  minCustomer: 32,
  maxCustomer: 48,
  avgCupsCust: 3.2,
  avgBeansCust: 0.4,
  hourlyCust: [],
  hourlyCups: [],
  hourlyCupsBeans: [],
  hourlyBeansByLb: [],
  allHourlyBeans: this.hourlyCupsBeans + this.hourlyBeansByLb,
  dailyPounds: 0,

  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++){
     this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
   }
  },

  generateHourlyCups: function() {
    for (var i = 0; i < hours.length; i++) {
      var cups = this.avgCupsCust * this.hourlyCust[i];
      this.hourlyCups.push(cups);
      this.hourlyCupsBeans.push(cups / 20);
      this.dailyPounds += (cups / 20);
    }
  },

  generateHourlyBeansByLb: function() {
    for (var i = 0; i < hours.length; i++) {
      var beans = this.avgBeansCust * this.hourlyCust[i];
      // console.log(parseFloat(beans.toFixed(1)));
      this.hourlyBeansByLb.push(beans);
      this.dailyPounds += beans;
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
      liEl.textContent = hours[i] + ": " + (this.hourlyCupsBeans[i] + this.hourlyBeansByLb[i]).toFixed(1) + ' lbs [' + this.hourlyCust[i] + ' customers, ' + this.hourlyCups[i].toFixed(1) + ' cups (' + this.hourlyCupsBeans[i].toFixed(1) + ' lbs), ' + this.hourlyBeansByLb[i].toFixed(1) + ' lbs to-go]';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'TOTAL DAILY POUNDS THIS LOCATION: ' + this.dailyPounds.toFixed(1);
    ulEl.appendChild(liEl);
  }
}

var seaPubLib = {
  name: 'Seattle Public Library',
  minCustomer: 49,
  maxCustomer: 75,
  avgCupsCust: 2.6,
  avgBeansCust: 0.2,
  hourlyCust: [],
  hourlyCups: [],
  hourlyCupsBeans: [],
  hourlyBeansByLb: [],
  allHourlyBeans: this.hourlyCupsBeans + this.hourlyBeansByLb,
  dailyPounds: 0,

  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++){
     this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
   }
  },

  generateHourlyCups: function() {
    for (var i = 0; i < hours.length; i++) {
      var cups = this.avgCupsCust * this.hourlyCust[i];
      this.hourlyCups.push(cups);
      this.hourlyCupsBeans.push(cups / 20);
      this.dailyPounds += (cups / 20);
    }
  },

  generateHourlyBeansByLb: function() {
    for (var i = 0; i < hours.length; i++) {
      var beans = this.avgBeansCust * this.hourlyCust[i];
      // console.log(parseFloat(beans.toFixed(1)));
      this.hourlyBeansByLb.push(beans);
      this.dailyPounds += beans;
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
      liEl.textContent = hours[i] + ": " + (this.hourlyCupsBeans[i] + this.hourlyBeansByLb[i]).toFixed(1) + ' lbs [' + this.hourlyCust[i] + ' customers, ' + this.hourlyCups[i].toFixed(1) + ' cups (' + this.hourlyCupsBeans[i].toFixed(1) + ' lbs), ' + this.hourlyBeansByLb[i].toFixed(1) + ' lbs to-go]';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'TOTAL DAILY POUNDS THIS LOCATION: ' + this.dailyPounds.toFixed(1);
    ulEl.appendChild(liEl);
  }
}

var soLakeUnion = {
  name: 'South Lake Union',
  minCustomer: 35,
  maxCustomer: 88,
  avgCupsCust: 1.3,
  avgBeansCust: 3.7,
  hourlyCust: [],
  hourlyCups: [],
  hourlyCupsBeans: [],
  hourlyBeansByLb: [],
  allHourlyBeans: this.hourlyCupsBeans + this.hourlyBeansByLb,
  dailyPounds: 0,

  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++){
     this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
   }
  },

  generateHourlyCups: function() {
    for (var i = 0; i < hours.length; i++) {
      var cups = this.avgCupsCust * this.hourlyCust[i];
      this.hourlyCups.push(cups);
      this.hourlyCupsBeans.push(cups / 20);
      this.dailyPounds += (cups / 20);
    }
  },

  generateHourlyBeansByLb: function() {
    for (var i = 0; i < hours.length; i++) {
      var beans = this.avgBeansCust * this.hourlyCust[i];
      // console.log(parseFloat(beans.toFixed(1)));
      this.hourlyBeansByLb.push(beans);
      this.dailyPounds += beans;
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
      liEl.textContent = hours[i] + ": " + (this.hourlyCupsBeans[i] + this.hourlyBeansByLb[i]).toFixed(1) + ' lbs [' + this.hourlyCust[i] + ' customers, ' + this.hourlyCups[i].toFixed(1) + ' cups (' + this.hourlyCupsBeans[i].toFixed(1) + ' lbs), ' + this.hourlyBeansByLb[i].toFixed(1) + ' lbs to-go]';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'TOTAL DAILY POUNDS THIS LOCATION: ' + this.dailyPounds.toFixed(1);
    ulEl.appendChild(liEl);
  }
}

var seaTac = {
  name: 'Sea-Tac International Airport',
  minCustomer: 68,
  maxCustomer: 124,
  avgCupsCust: 1.1,
  avgBeansCust: 2.7,
  hourlyCust: [],
  hourlyCups: [],
  hourlyCupsBeans: [],
  hourlyBeansByLb: [],
  allHourlyBeans: this.hourlyCupsBeans + this.hourlyBeansByLb,
  dailyPounds: 0,

  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++){
     this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
   }
  },

  generateHourlyCups: function() {
    for (var i = 0; i < hours.length; i++) {
      var cups = this.avgCupsCust * this.hourlyCust[i];
      this.hourlyCups.push(cups);
      this.hourlyCupsBeans.push(cups / 20);
      this.dailyPounds += (cups / 20);
    }
  },

  generateHourlyBeansByLb: function() {
    for (var i = 0; i < hours.length; i++) {
      var beans = this.avgBeansCust * this.hourlyCust[i];
      // console.log(parseFloat(beans.toFixed(1)));
      this.hourlyBeansByLb.push(beans);
      this.dailyPounds += beans;
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
      liEl.textContent = hours[i] + ": " + (this.hourlyCupsBeans[i] + this.hourlyBeansByLb[i]).toFixed(1) + ' lbs [' + this.hourlyCust[i] + ' customers, ' + this.hourlyCups[i].toFixed(1) + ' cups (' + this.hourlyCupsBeans[i].toFixed(1) + ' lbs), ' + this.hourlyBeansByLb[i].toFixed(1) + ' lbs to-go]';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'TOTAL DAILY POUNDS THIS LOCATION: ' + this.dailyPounds.toFixed(1);
    ulEl.appendChild(liEl);
  }
}

var webSales = {
  name: 'Sales Through campfirecoffee.com',
  minCustomer: 3,
  maxCustomer: 6,
  avgCupsCust: 0,
  avgBeansCust: 6.7,
  hourlyCust: [],
  hourlyCups: [],
  hourlyCupsBeans: [],
  hourlyBeansByLb: [],
  allHourlyBeans: this.hourlyCupsBeans + this.hourlyBeansByLb,
  dailyPounds: 0,

  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++){
     this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
   }
  },

  generateHourlyCups: function() {
    for (var i = 0; i < hours.length; i++) {
      var cups = this.avgCupsCust * this.hourlyCust[i];
      this.hourlyCups.push(cups);
      this.hourlyCupsBeans.push(cups / 20);
      this.dailyPounds += (cups / 20);
    }
  },

  generateHourlyBeansByLb: function() {
    for (var i = 0; i < hours.length; i++) {
      var beans = this.avgBeansCust * this.hourlyCust[i];
      // console.log(parseFloat(beans.toFixed(1)));
      this.hourlyBeansByLb.push(beans);
      this.dailyPounds += beans;
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
      liEl.textContent = hours[i] + ": " + (this.hourlyCupsBeans[i] + this.hourlyBeansByLb[i]).toFixed(1) + ' lbs [' + this.hourlyCust[i] + ' customers, ' + this.hourlyCups[i].toFixed(1) + ' cups (' + this.hourlyCupsBeans[i].toFixed(1) + ' lbs), ' + this.hourlyBeansByLb[i].toFixed(1) + ' lbs to-go]';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'TOTAL DAILY POUNDS THIS LOCATION: ' + this.dailyPounds.toFixed(1);
    ulEl.appendChild(liEl);
  }
}
var allKioskSales = 0;

var kiosks = [pikePlace, capHill, seaPubLib, soLakeUnion, seaTac, webSales];
for (var i = 0; i < kiosks.length; i++) {
  kiosks[i].render();
  allKioskSales += kiosks[i].dailyPounds;
}

var h1El = document.createElement('h1');
h1El.textContent = 'OMG! We are selling ' + allKioskSales.toFixed(1) + ' pounds of coffee every day!!! That is ' + (allKioskSales / 2000).toFixed(2) + ' TONS of coffee every day!!!!!';
document.body.appendChild(h1El);
