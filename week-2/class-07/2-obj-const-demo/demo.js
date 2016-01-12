// Demo for objects to constructors
'use strict';

var caleb = {
  course: '201d5',
  firstName: 'Caleb',
  lastInitial: 'S',
  hairStyle: 'red toque',
  intro: function() {
    console.log('My name is ' + this.firstName + ' and my last initial is ' + this.lastInitial);
  }
};

var marshall = {
  course: '201d5',
  firstName: 'Marshall',
  lastInitial: 'M',
  hairStyle: 'poofy',
  intro: function() {
    console.log('My name is ' + this.firstName + ' and my last initial is ' + this.lastInitial);
  }
};

// I would need 350 lines of code to model our class this way
// (35 students * 10 lines each)

// What if... I had a function to make these many similar objects for me?

function Student(firstName, lastInitial, hairStyle) {
  this.course = '201d5';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.hairStyle = hairStyle;
  this.intro = function() {
    console.log('My name is ' + this.firstName + ' and my last initial is ' + this.lastInitial);
  }
}
// create instances
var susan = new Student('Susan', 'H', 'straight', 4);

Student.prototype.hungerRating = 10;
susan.notesQuality = 'AWESOME';

// add a property to the constructor by modifying the prototype

Student.prototype.sleepyFactor = 8;

var davidZ = new Student('David', 'Z', 'ginger power', 12);

// add a method by modifying the prototype

Student.prototype.warCry = function() {
  console.log('Woooo!!!!');
}


// Efficiency!
// 350 lines of code to model entire class before...
// Now, need only x lines of code

  // With a constructor function...
  //
  // the function is 10 lines
  // each student needs 1 line to be created...
  //
  // 45 total lines
