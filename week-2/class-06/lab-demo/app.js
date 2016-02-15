'use strict';

function sum(num1, num2){
  var result = num1 + num2;
  // console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + result + '.');
  return result;
}

function multiply(num1, num2){
  var result = num1 * num2;
  // console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + result + '.');
  return result;
}

function sumAndMultiply(num1, num2, num3){
  var summation = sum(sum(num1, num2), num3);
  var product = multiply(multiply(num1, num2), num3);

  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + summation + '.');
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + product + '.');

  return [summation, product];
}

function sumArray(inputArray){
  var result = 0;
  for(var i=0; i<inputArray.length; i++){
    result += inputArray[i];
  }

  console.table(inputArray);
  console.log(inputArray + ' was passed in as an array of numbers, and ' + result + ' is their sum.');
  return result;
}

function multiplyArray(inputArray){
  var result = 1;
  for (var i=0; i<inputArray.length; i++){
    result *= inputArray[i];
  }

  console.log('The numbers ' + inputArray + ' have a product of ' + result + '.');
  return result;
}
