# Lab Assignment
# Monday, 15 February 2016

Today in lab you will create a new GitHub repo, solve a lot of little code problems, and do some pair work in the second half of the morning.

**Be sure to follow instructions carefully.**

Here are some things to keep in mind:

* Place no function calls in your code. Everything should be run by hand from the console.
* You will be recording a lot of information in your README file, so it might be handy to have a Markdown reference handy so that you can make it look nice.
* Create a new branch for each code problem, and merge that branch into *master* when it is completed. Don't forget to pull the new master branch from GitHub into your local master branch each time.

---
#### Create and clone a new GitHub repo named lab-feb-15
You should not need instructions for this by now. Be sure to create it withe a README file, and be sure to put it in the root level of your ~/CF/201 directory.

---
#### HTML and JS setup
Create a index.html file (with all of the standard HTML structure like *doctype* and *title* and *head* and *body*) and put in the same \<body> [code](https://github.com/codefellows/seattle-201d6/blob/master/week-1/class-05/code-samples-for-lab.html) that we used on Friday. Place the content inside the \<script> tags in this document into an app.js file and then get the HTML and JS files connected to one another.

---
#### Problem 1
*(Don't forget to create a new branch!)* Write a function called **sum()** that takes in two numbers as arguments and then returns the sum of those numbers. Have it console.log() the numbers and the sum with a message that exactly follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console, and when it is finished, add-commit-push (**a-c-p**) your work to your repo, merge it to master, and then pull the new master branch from GitHub into your local master branch.

---
#### Problem 2
Write a function called **multiply()** that takes in two numbers as arguments and then returns the product of those numbers. Have it console.log() the numbers and the product with a message that exactly follows this example and uses the values that were input into the function:

"The product of 4 and 7 is 28."

**a-c-p**, yadda yadda...

---
#### Problem 3
Write a function called **sumAndMultiply()** that takes in THREE numbers as arguments and then returns two values: the sum of those numbers and the product of those numbers. Use your existing sum() and product() functions to do these calculations, and be sure to turn off their console.log()s by commenting them out. Have this function do a console.log() of the numbers, the sum, and the product with two separate messages that exactly follows the examples below and uses the values that were input into the function:

"4 and 7 and 5 sum to 16."

"The numbers 4 and 7 and 5 have a product of 140."

**a-c-p**, yadda yadda...

---
#### Problem 4
Write a function called **sumArray()** that takes in an array of numbers as a single argument and then returns the sum of those numbers. Have it console.table() the array and  console.log() the sum with a message that exactly follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

Test this function by hand in the console (remember, to do this you'll need to create an array first), and when it is finished, add-commit-push (**a-c-p**) your work to your repo, merge it to master, and then pull the new master branch on GitHub into your local master branch.

---
#### Problem 5
Write a function called **multiplyArray()** that takes in an array of numbers as a single argument and then returns the product of those numbers. Have it console.table() the array and  console.log() the product with a message that exactly follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 20."

**a-c-p**, yadda yadda...

---
#### Problem 6
We're now going to put all of this output into the browser window. First, do these things to get the page structure ready:

* In the HTML file, delete the \<p> tags for the sixth and seventh questions.
* In the JS file, delete everything but `var pTagOne = document.getElementById('ans-one');`
* Create four more of these JS statements that have unique variable names and correspond to the other remaining 'ans' tags.
* In the HTML file, inside of the five remaining \<p> tags with the "ques" IDs, write the first sentence of the five problems above, in this format: Problem 1: Write a function called sum() that takes in two numbers as arguments and then returns the sum of those numbers.
* As we did on Friday's lab, take your console.log() messages and put those into the \<p> tags in the browser window by using the textContent property.
