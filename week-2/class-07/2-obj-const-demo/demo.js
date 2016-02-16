// Class demo for objects and constructors
// Code 201: Feb 16, 2016
'use strict';

// Let's make objects for the students in this class.
// Each object has properties of first name, last initial, hair color, and the class section they are in
// And, let's give each object a greeting method that utilizes these properties

var noah = {};
var shelly = {};

// I would need xxx lines of code to model our class this way
// (14 students * x lines each)

// What if I had a function to make these many similar (but unique) objects for me?
// I can create that by adapting one of my existing objects!


// Now I can create instances

// And add a property to the constructor, that then in inherited by all of the instances, by modifying the prototype

// And also add a method to all instances by modifying the prototype

// Efficiency!
// xxx lines of code to model entire class before...
// Now, need only x lines of code
// Plus, I can now easily modify multiple objects in an a single place
// And all of these objects exist in memory, where they are useful, rather than directly in the code, where they are just one more thing that can break
