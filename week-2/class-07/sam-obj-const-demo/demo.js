// Class demo for objects and constructors
// Code 201: Feb 16, 2016
'use strict';

// Let's make objects for the students in this class.
// Each object has properties of first name, last initial, hair color, and the class section they are in
// And, let's give each object a greeting method that utilizes these properties

var noah = {
  firstName: 'Noah',
  lastInitial: 'X',
  hairColor: 'blue',
  classSection: 'seattle-201d6',
  greeting: function() {
    alert('My name is ' + this.firstName + ' and my hair is ' + this.hairColor);
  }
};

// I would need 140 lines of code to model our class this way
// (14 students * 10 lines each)

// What if I had a function to make these many similar (but unique) objects for me?
// I can create that by adapting one of my existing objects!

// identical features: classSection, greeting
// unique features: name, initial, hair

// var shelly = {
function Student(firstName, lastInitial, middleInitial, hairColor) {
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.middleInitial = middleInitial;
  this.hairColor = hairColor;
  this.classSection = 'seattle-201d6';
  this.greeting = function() {
    alert('My name is ' + this.firstName + ' and my hair is ' + this.hairColor);
  };
};

// Now I can create instances
var shelly = new Student('Shelly', 'B', 'X', 'light brown');
var adrienne = new Student('Adrienne', 'GGG', 'Y', 'black');

// shelly.classSection = 'sea-201d1';
// And add a property to the constructor, that then in inherited by all of the instances, by modifying the prototype

// And also add a method to all instances by modifying the prototype

// Efficiency!
// xxx lines of code to model entire class before...
// Now, need only x lines of code
// Plus, I can now easily modify multiple objects in an a single place
// And all of these objects exist in memory, where they are useful, rather than directly in the code, where they are just one more thing that can break
